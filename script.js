const imageUpload = document.getElementById('imageUpload');
const imagePreview = document.getElementById('imageToDownload');
const form = document.getElementById('imageDetailsForm');
const viewBtn = document.getElementById('viewDetailsBtn');
const detailsBox = document.getElementById('submittedDetails');
const detailsList = document.getElementById('detailsList');
const downloadBtn = document.getElementById('downloadBtn');

let uploadedImageURL = '';
let savedDetails = {};

imageUpload.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
uploadedImageURL = URL.createObjectURL(file);
imagePreview.src = uploadedImageURL;
imagePreview.style.display = 'block';
form.style.display = 'block';
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  savedDetails = {
Title: document.getElementById('imageTitle').value,
Description: document.getElementById('imageDescription').value,
Format: document.getElementById('imageFormat').value,
Price: document.getElementById('imagePrice').value,
'File Size': document.getElementById('imageSize').value,
Resolution: document.getElementById('imageResolution').value,
Tags: document.getElementById('imageCategory').value,
Copyright: document.getElementById('imageCopyright').value
  };

  form.style.display = 'none';
  imageUpload.style.display = 'none';
  viewBtn.style.display = 'inline-block';
  alert("Details submitted successfully!");
});

viewBtn.addEventListener('click', function () {
  detailsList.innerHTML = '';
  for (let key in savedDetails) {
const li = document.createElement('li');
li.textContent = `${key}: ${savedDetails[key]}`;
detailsList.appendChild(li);
  }
  detailsBox.style.display = 'block';
});

downloadBtn.addEventListener('click', () => {
  if (uploadedImageURL) {
const a = document.createElement('a');
a.href = uploadedImageURL;
a.download = 'uploaded-image.jpg';
a.click();
  } else {
alert("Please upload an image first.");
  }
});

