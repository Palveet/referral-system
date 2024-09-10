import React from 'react';
import './index.css'; // Make sure this file exists in the same directory

const ReferralForm = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }} className='overall-font'>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Referral Form</h1>
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>Please provide information about the person you're referring.</p>
      
      <form className="referral-form">
        <div className="form-group">
          <label htmlFor="duration">1. How long have you known the person you're referring?</label>
          <select id="duration">
            <option value="">Select duration</option>
            <option value="less-than-1">Less than 1 year</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="more-than-5">More than 5 years</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="context">2. In what professional context did you work with this person?</label>
          <input
            id="context"
            type="text"
            placeholder="e.g., same company, client-vendor relationship"
          />
        </div>

        <div className="form-group">
          <label htmlFor="project">3. Please describe a specific project or task you worked on together.</label>
          <textarea
            id="project"
            rows="3"
            placeholder="Describe the project or task"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="strengths">4. Can you provide examples of the referee's strengths that you observed firsthand?</label>
          <textarea
            id="strengths"
            rows="3"
            placeholder="List observed strengths"
          ></textarea>
        </div>

        <div className="form-group">
          <label>5. How would you rate the referee's ability to collaborate with team members?</label>
          <div className="radio-group">
            {['Poor', 'Average', 'Good', 'Excellent'].map((rating) => (
              <label key={rating}>
                <input
                  type="radio"
                  name="collaboration"
                  value={rating.toLowerCase()}
                />
                {rating}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="challenge">6. Can you describe a challenging situation the referee faced and how they handled it?</label>
          <textarea
            id="challenge"
            rows="3"
            placeholder="Describe the situation and how it was handled"
          ></textarea>
        </div>

        <div className="form-group">
          <label>7. Would you be willing to have a brief follow-up conversation about this referral if needed?</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="followup" value="yes" />
              Yes
            </label>
            <label>
              <input type="radio" name="followup" value="no" />
              No
            </label>
          </div>
        </div>

        <button type="submit">Submit Referral</button>
      </form>
    </div>
  );
};

export default ReferralForm;