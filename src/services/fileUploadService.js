import axios from 'axios';

const url = 'https://10.56.255.2:8081/'

class FileUploadService {
  upload(company, file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return axios.post(url + "api/partners/"+ company +"/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }

  getFiles(company) {
    return axios.get(url + "api/partners/" + company + "/files");
  }

  deleteFile(company, fileName) {
    return axios.delete(url + "api/partners/" + company + "/files/" + fileName);
  }
}

export default new FileUploadService();
