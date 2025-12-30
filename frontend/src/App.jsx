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






import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { 
  FaSchool, 
  FaUser, 
  FaChartBar,  // fixed icon
  FaBed, 
  FaExclamationTriangle, 
  FaBrain 
} from 'react-icons/fa';
import './app.css'; // Include custom CSS for shimmer & glow

const AcademicStressForm = () => {
  const [formData, setFormData] = useState({
    ageGroup: '',
    gender: '',
    education: '',
    pressure: '',
    sleep: '',
    stressCause: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Stress level calculated! (Example output)');
  };

  return (
    <div className="academic-bg min-vh-100 d-flex flex-column text-light">
      <Container className="py-5">
        {/* Header */}
        <header className="d-flex justify-content-between align-items-center mb-5 p-3 rounded bg-dark shadow">
          <div className="d-flex align-items-center gap-3">
            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
              <FaSchool size={28} />
            </div>
            <h2>Academic Stress Predictor</h2>
          </div>
          <Button variant="primary">Sign In</Button>
        </header>

        {/* Intro */}
        <div className="text-center mb-4">
          <div className="badge bg-primary mb-2 p-2 fs-6">
            <FaBrain className="me-2" /> AI-Driven Analysis
          </div>
          <h1>Academic Stress Assessment</h1>
          <p className="text-secondary">
            Fill out the details below to receive a personalized, AI-driven prediction of your academic stress levels and tailored recommendations.
          </p>
        </div>

        {/* Form Card */}
        <Card className="p-4 mb-4 bg-dark shadow-lg card-glow border-0">
          <Form onSubmit={handleSubmit}>
            {/* Student Details */}
            <h4 className="mb-3"><FaUser className="me-2 text-primary" />Student Details</h4>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Age Group</Form.Label>
                  <Form.Select name="ageGroup" value={formData.ageGroup} onChange={handleChange}>
                    <option value="">Select Age Group</option>
                    <option value="15-18">15-18</option>
                    <option value="19-22">19-22</option>
                    <option value="23-26">23-26</option>
                    <option value="27+">27+</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Gender</Form.Label>
                  <Form.Select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="prefer-not-say">Prefer not to say</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={12} className="mt-3">
                <Form.Group>
                  <Form.Label>Current Education Level</Form.Label>
                  <Form.Select name="education" value={formData.education} onChange={handleChange}>
                    <option value="">Select Education Level</option>
                    <option value="high-school">High School</option>
                    <option value="undergraduate">Undergraduate (Bachelor's)</option>
                    <option value="postgraduate">Postgraduate (Master's)</option>
                    <option value="phd">PhD / Doctorate</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            {/* Academic Factors */}
            <h4 className="mb-3 mt-4"><FaChartBar className="me-2 text-primary" />Academic Factors</h4>
            <Row className="mb-3">
              <Col md={12}>
                <Form.Label>Academic Pressure (1-5)</Form.Label>
                <div className="d-flex gap-2 mt-1">
                  {[1, 2, 3, 4, 5].map(num => (
                    <Form.Check
                      type="radio"
                      label={num}
                      key={num}
                      name="pressure"
                      value={num}
                      checked={formData.pressure === String(num)}
                      onChange={handleChange}
                      className="text-light"
                    />
                  ))}
                </div>
              </Col>
              <Col md={6} className="mt-3">
                <Form.Group>
                  <Form.Label>Average Sleep (Hours/Night)</Form.Label>
                  <Form.Control
                    type="number"
                    name="sleep"
                    min="0"
                    max="24"
                    placeholder="e.g. 7"
                    value={formData.sleep}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mt-3">
                <Form.Group>
                  <Form.Label>Main Stress Cause</Form.Label>
                  <Form.Select name="stressCause" value={formData.stressCause} onChange={handleChange}>
                    <option value="">Select Cause</option>
                    <option value="exams">Exams & Grading</option>
                    <option value="deadlines">Project Deadlines</option>
                    <option value="workload">Heavy Workload</option>
                    <option value="finances">Financial Issues</option>
                    <option value="social">Social Expectations</option>
                    <option value="career">Career Uncertainty</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            {/* Submit Button with Shimmer */}
            <Button type="submit" className="w-100 btn-shimmer mt-3 py-3 fs-5">
              Calculate Stress Levels <span className="ms-2">&#8594;</span>
            </Button>
          </Form>
        </Card>

        <p className="text-center text-secondary mt-3">
          This tool uses a machine learning model for educational purposes only. It is not a substitute for professional psychological advice or diagnosis.
        </p>
      </Container>
    </div>
  );
};

export default AcademicStressForm;
