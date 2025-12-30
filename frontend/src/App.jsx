// import React, { useState } from "react";
// import axios from "axios";
// import "./App.css";


// function App() {
//   const [formData, setFormData] = useState({
//     age_group: "",
//     gender: "",
//     education_level: "",
//     academic_pressure: "",
//     sleep_hours: "",
//     stress_cause: ""
//   });

//   const [result, setResult] = useState("");
//   const [confidence, setConfidence] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setResult("");
//     setConfidence(null);

//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/predict",
//         {
//           ...formData,
//           academic_pressure: Number(formData.academic_pressure)
//         }
//       );

//       setResult(response.data.predicted_stress_frequency);
//       setConfidence(response.data.confidence);
//     } catch (error) {
//       console.error(error);
//       setResult("Prediction failed");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="container">
//       <h2>Academic Stress Prediction</h2>

//       <form onSubmit={handleSubmit}>
//         <select name="age_group" onChange={handleChange} required>
//           <option value="">Age Group</option>
//           <option value="under 15">Under 15</option>
//           <option value="15-18">15-18</option>
//           <option value="19-22">19-22</option>
//           <option value="23-26">23-26</option>
//           <option value="27+">27+</option>
//         </select>

//         <select name="gender" onChange={handleChange} required>
//           <option value="">Gender</option>
//           <option value="female">Female</option>
//           <option value="male">Male</option>
//         </select>

//         <select name="education_level" onChange={handleChange} required>
//           <option value="">Education Level</option>
//           <option value="college">College</option>
//           <option value="university">University</option>
//           <option value="other">Other</option>
//         </select>

//         <input
//           type="number"
//           name="academic_pressure"
//           placeholder="Academic Pressure (1–5)"
//           min="1"
//           max="5"
//           onChange={handleChange}
//           required
//         />

//         <select name="sleep_hours" onChange={handleChange} required>
//           <option value="">Sleep Hours</option>
//           <option value="5-6">5–6</option>
//           <option value="7-8">7–8</option>
//           <option value="more_than_8">More than 8</option>
//         </select>

//         <select name="stress_cause" onChange={handleChange} required>
//           <option value="">Main Stress Cause</option>
//           <option value="exams">Exams</option>
//           <option value="financial">Financial</option>
//           <option value="time_management">Time Management</option>
//           <option value="subject_difficulty">Subject Difficulty</option>
//           <option value="other">Other</option>
//         </select>

//         <button type="submit" disabled={loading}>
//           {loading ? "Predicting..." : "Predict Stress"}
//         </button>
//       </form>

//       {loading && <div className="spinner"></div>}

//       {result !== "" && (
//         <div className="result">
//           <h3>Prediction Result</h3>
//           <p><strong>Stress Level:</strong> {result}</p>
//           <p><strong>Confidence:</strong> {confidence}%</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;





import React, { useState } from "react";
import axios from "axios";

const colors = {
  primary: "#743afaff",
  backgroundLight: "#f6f6f8",
  backgroundDark: "#101622",
  surfaceDark: "#1c1f27",
  borderDark: "#8c8b8cff",
  textSecondary: "#b3caf7ff"
};

function App() {
  const [formData, setFormData] = useState({
    age_group: "",
    gender: "",
    education_level: "",
    academic_pressure: "",
    sleep_hours: "",
    stress_cause: ""
  });

  const [result, setResult] = useState("");
  const [confidence, setConfidence] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlePressureChange = (value) =>
    setFormData({ ...formData, academic_pressure: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    setConfidence(null);

    try {
      const res = await axios.post(
        "https://student-mental-health-academic-pressure.onrender.com/predict",
        {
          ...formData,
          academic_pressure: Number(formData.academic_pressure)
        }
      );

      setResult(res.data.predicted_stress_frequency);
      setConfidence(res.data.confidence);
    } catch (error) {
      console.error(error);
      setResult("Prediction failed");
    }

    setLoading(false);
  };

  return (
    <div style={{ background: colors.backgroundDark, minHeight: "100vh", color: "white" }}>
      {/* Navbar */}
      <nav
        className="navbar"
        style={{
          background: colors.backgroundDark,
          borderBottom: `1px solid ${colors.borderDark}`
        }}
      >
        <div className="container">
          <span className="navbar-brand fw-bold text-white">
            Academic Stress Predictor
          </span>
        </div>
      </nav>

      <div className="container py-5">
        <div className="text-center mb-4">
          <h1 className="fw-bold">Academic Stress Assessment</h1>
          <p style={{ color: colors.textSecondary }}>
            AI-powered academic stress prediction
          </p>
        </div>

        <div
          className="card shadow-lg"
          style={{
            background: colors.surfaceDark,
            border: `1px solid ${colors.borderDark}`
          }}
        >
          <div className="card-body p-4 p-md-5">
            <form onSubmit={handleSubmit}>
              <h5 className="mb-3" style={{
                      
                      color: "white",
                      
                    }}>Student Details</h5>

              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <select
                    className="form-select"
                    name="age_group"
                    onChange={handleChange}
                    required
                    style={{
                      background: colors.backgroundDark,
                      color: "white",
                      border: `1px solid ${colors.borderDark}`
                    }}
                  >
                    <option value="">Age Group</option>
                    <option value="15-18">15–18</option>
                    <option value="19-22">19–22</option>
                    <option value="23-26">23–26</option>
                    <option value="27+">27+</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <select
                    className="form-select"
                    name="gender"
                    onChange={handleChange}
                    required
                    style={{
                      background: colors.backgroundDark,
                      color: "white",
                      border: `1px solid ${colors.borderDark}`
                    }}
                  >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className="col-12">
                  <select
                    className="form-select"
                    name="education_level"
                    onChange={handleChange}
                    required
                    style={{
                      background: colors.backgroundDark,
                      color: "white",
                      border: `1px solid ${colors.borderDark}`
                    }}
                  >
                    <option value="">Education Level</option>
                    <option value="college">College</option>
                    <option value="university">University</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <h5 className="mb-3" style={{
                      
                      color: "white",
                      
                    }}>Academic Pressure (1–5)</h5>
              <div className="d-flex gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((v) => (
                  <button
                    type="button"
                    key={v}
                    className="btn flex-fill"
                    onClick={() => handlePressureChange(v)}
                    style={{
                      background:
                        formData.academic_pressure === v
                          ? colors.primary
                          : "transparent",
                      color:
                        formData.academic_pressure === v
                          ? "white"
                          : colors.textSecondary,
                      border: `1px solid ${colors.borderDark}`
                    }}
                  >
                    {v}
                  </button>
                ))}
              </div>

              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <select
                    className="form-select"
                    name="sleep_hours"
                    onChange={handleChange}
                    required
                    style={{
                      background: colors.backgroundDark,
                      color: "white",
                      border: `1px solid ${colors.borderDark}`
                    }}
                  >
                    <option value="">Sleep Hours</option>
                    <option value="5-6">5–6</option>
                    <option value="7-8">7–8</option>
                    <option value="more_than_8">More than 8</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <select
                    className="form-select"
                    name="stress_cause"
                    onChange={handleChange}
                    required
                    style={{
                      background: colors.backgroundDark,
                      color: "white",
                      border: `1px solid ${colors.borderDark}`
                    }}
                  >
                    <option value="">Stress Cause</option>
                    <option value="exams">Exams</option>
                    <option value="financial">Financial</option>
                    <option value="time_management">Time Management</option>
                    <option value="subject_difficulty">
                      Subject Difficulty
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn w-100 py-3 fw-bold"
                disabled={loading}
                style={{
                  background: colors.primary,
                  color: "white",
                  border: "none"
                }}
              >
                {loading ? "Predicting..." : "Calculate Stress Level"}
              </button>
            </form>

            {result && (
              <div
                className="mt-4 p-3 text-center rounded"
                style={{
                      
                      color: "white",
                      
                 
                  background: colors.backgroundDark,
                  border: `1px solid ${colors.borderDark}`
                }}
              >
                <strong>Stress Level:</strong> {result}
                <br />
                <strong>Confidence:</strong> {confidence}%
              </div>
            )}
          </div>
        </div>

        <p
          className="text-center small mt-4"
          style={{ color: colors.textSecondary }}
        >
          Educational use only. Not a medical diagnosis.
        </p>
      </div>
    </div>
  );
}

export default App;
