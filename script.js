// Modal for Tax Consultation
const consultationModal = document.getElementById('consultationModal');
const openConsultationModalBtn = document.getElementById('openConsultationModal');
const closeConsultationModalBtn = document.getElementById('closeConsultationModal');

openConsultationModalBtn.onclick = () => {
    consultationModal.style.display = "block";
};

closeConsultationModalBtn.onclick = () => {
    consultationModal.style.display = "none";
};

// Modal for Tax Advice
const taxAdviceModal = document.getElementById('taxAdviceModal');
const openTaxAdviceModalBtn = document.getElementById('openTaxAdviceModal');
const closeTaxAdviceModalBtn = document.getElementById('closeTaxAdviceModal');

openTaxAdviceModalBtn.onclick = () => {
    taxAdviceModal.style.display = "block";
};

closeTaxAdviceModalBtn.onclick = () => {
    taxAdviceModal.style.display = "none";
};

// Close modal when clicking outside of the modal content
window.onclick = (event) => {
    if (event.target === consultationModal || event.target === taxAdviceModal) {
        consultationModal.style.display = "none";
        taxAdviceModal.style.display = "none";
    }
};
