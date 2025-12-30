from pydantic import BaseModel

class StressInput(BaseModel):
    age_group: str
    gender: str
    education_level: str
    academic_pressure: int
    sleep_hours: str
    stress_cause: str


class StressOutput(BaseModel):
    predicted_stress_frequency: str
    confidence: float
