from fastapi import FastAPI
import pandas as pd
import joblib

from schemas import StressInput, StressOutput

app = FastAPI(
    title="Academic Stress Prediction API",
    version="1.0"
)

# Load trained model
model = joblib.load("model/stress_decision_tree_model.joblib")


@app.get("/")
def home():
    return {"message": "Academic Stress Prediction API is running"}


@app.post("/predict", response_model=StressOutput)
def predict_stress(data: StressInput):
    # Convert input to DataFrame
    input_df = pd.DataFrame([{
        "age_group": data.age_group.lower(),
        "gender": data.gender.lower(),
        "education_level": data.education_level.lower(),
        "academic_pressure": data.academic_pressure,
        "sleep_hours": data.sleep_hours.lower(),
        "stress_cause": data.stress_cause.lower()
    }])

    prediction = model.predict(input_df)[0]

    return {
        "predicted_stress_frequency": prediction
    }
