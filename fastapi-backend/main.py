from fastapi import FastAPI
import pandas as pd
import joblib
from fastapi.middleware.cors import CORSMiddleware
from schemas import StressInput, StressOutput

# Create app
app = FastAPI(
    title="Academic Stress Prediction API",
    version="1.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model
model = joblib.load("model/stress_decision_tree_model.joblib")


@app.get("/")
def home():
    return {"message": "Academic Stress Prediction API is running"}


@app.post("/predict", response_model=StressOutput)
def predict_stress(data: StressInput):

    sleep_map = {
        "5-6": "5-6",
        "7-8": "7-8",
        "more_than_8": "more than 8"
    }

    input_df = pd.DataFrame([{
        "age_group": data.age_group.lower(),
        "gender": data.gender.lower(),
        "education_level": data.education_level.lower(),
        "academic_pressure": data.academic_pressure,
        "sleep_hours": sleep_map.get(data.sleep_hours, data.sleep_hours),
        "stress_cause": data.stress_cause.lower()
    }])

    prediction = model.predict(input_df)[0]
    confidence = model.predict_proba(input_df).max()

    return {
        "predicted_stress_frequency": prediction,
        "confidence": round(float(confidence) * 100, 2)
    }
