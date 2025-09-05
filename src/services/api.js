import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Function to get all medical claims data from backend API
export const getAllMedicalClaims = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}api/MedicalClaims`);
    return response.data;
  } catch (error) {
    throw error;
  }
};