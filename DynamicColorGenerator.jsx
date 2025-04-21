import React, { useState } from "react";

const DynamicColorGenerator = () => {
  const [color, setColor] = useState("#3498db");
  const [copied, setCopied] = useState(false);

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
    setColor(randomColor);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={styles.page}>
      <div style={styles.whiteBox}>
        <h1 style={styles.heading}>Dynamic Color Generator</h1>
        <div style={{ ...styles.colorBox, backgroundColor: color }}></div>
        <div style={styles.colorCode}>{color}</div>
        <div style={styles.buttonGroup}>
          <button onClick={generateRandomColor} style={styles.buttonBlue}>
            Generate Color
          </button>
          <button onClick={copyToClipboard} style={styles.buttonGray}>
            Copy Color Code
          </button>
        </div>
        {copied && <div style={styles.copiedText}>Copied!</div>}
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "lightgreen",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  whiteBox: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  colorBox: {
    width: "200px",
    height: "200px",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  colorCode: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "black",
  },
  buttonGroup: {
    display: "flex",
    gap: "12px",
  },
  buttonBlue: {
    backgroundColor: "#3b82f6",
    color: "white",
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  buttonGray: {
    backgroundColor: "#e5e7eb",
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  copiedText: {
    color: "green",
    fontWeight: "500",
  },
};

export default DynamicColorGenerator;

