
import { useState } from "react";

const Index = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="maker-screen">
      <div className="uob-logo">
        <div className="logo-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h2>UOB</h2>
      </div>
      
      <div className="maker-container">
        <div className="maker-header">
          <h1 className="maker-title">Maker Screen</h1>
          <div className="maker-subtitle">Please fill in the details below</div>
        </div>
        
        <div className="maker-form">
          <div className="form-group">
            <label htmlFor="userId">User ID:</label>
            <input type="text" id="userId" className="input-field" placeholder="Enter user ID" />
          </div>
          
          <div className="form-group">
            <label htmlFor="appCode">App Code:</label>
            <select id="appCode" className="select-field">
              <option value="" disabled selected>Select app code</option>
              <option value="SPL">SPL</option>
              <option value="APP1">APP1</option>
              <option value="APP2">APP2</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="matrix">Matrix:</label>
            <select id="matrix" className="select-field">
              <option value="" disabled selected>Select matrix type</option>
              <option value="TYPE1">TYPE1</option>
              <option value="TYPE2">TYPE2</option>
              <option value="TYPE3">TYPE3</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="comments">Maker Comments:</label>
            <input type="text" id="comments" className="input-field" placeholder="Add comments" />
            <button className="icon-button">
              <span className="icon">⊕</span>
            </button>
          </div>
          
          <div className="form-group file-upload">
            <label>Upload Excel File:</label>
            <div className="file-input-container">
              <label htmlFor="fileUpload" className="file-label">
                Choose File
              </label>
              <input 
                type="file" 
                id="fileUpload" 
                onChange={handleFileChange} 
                accept=".xlsx,.xls,.csv" 
                className="file-input" 
              />
              <span className="file-name">{fileName}</span>
            </div>
          </div>
          
          <div className="button-group">
            <button className="action-button upload-btn">Upload</button>
            <button className="action-button download-btn">Download</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
