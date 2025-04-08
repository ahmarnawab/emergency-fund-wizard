
// DOM Elements
const calculateBtn = document.getElementById('calculate');
const monthlyExpensesInput = document.getElementById('monthlyExpenses');
const currentSavingsInput = document.getElementById('currentSavings');
const monthsInput = document.getElementById('months');
const monthsValueDisplay = document.getElementById('monthsValue');
const resultSection = document.getElementById('result');
const progressBar = document.getElementById('progressBar');
const progressPercent = document.getElementById('progressPercent');
const targetAmountDisplay = document.getElementById('targetAmount');
const savedAmountDisplay = document.getElementById('savedAmount');
const remainingAmountDisplay = document.getElementById('remainingAmount');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Initialize the calculator
document.addEventListener('DOMContentLoaded', () => {
  // Set up event listeners
  calculateBtn.addEventListener('click', calculateEmergencyFund);
  monthsInput.addEventListener('input', updateMonthsDisplay);
  
  // Initialize accordion
  setupAccordion();
});

// Update the months display when slider changes
function updateMonthsDisplay() {
  monthsValueDisplay.textContent = monthsInput.value;
}

// Calculate the emergency fund amount
function calculateEmergencyFund() {
  // Get values from inputs
  const monthlyExpenses = parseFloat(monthlyExpensesInput.value) || 0;
  const currentSavings = parseFloat(currentSavingsInput.value) || 0;
  const months = parseInt(monthsInput.value);
  
  // Validate input
  if (monthlyExpenses <= 0) {
    showToast('Monthly expenses must be greater than zero', 'error');
    return;
  }
  
  // Calculate the target emergency fund amount
  const targetAmount = monthlyExpenses * months;
  
  // Calculate the remaining amount needed
  const remainingAmount = Math.max(targetAmount - currentSavings, 0);
  
  // Calculate progress percentage (cap at 100%)
  const progress = Math.min((currentSavings / targetAmount) * 100, 100);
  
  // Update the UI with results
  displayResults(targetAmount, currentSavings, remainingAmount, progress);
  
  // Show success toast
  showToast(`Emergency Fund Calculated: ₹${formatNumber(targetAmount)}`, 'success');
  
  // Show the results section
  resultSection.classList.remove('hidden');
}

// Display the calculation results in the UI
function displayResults(targetAmount, currentSavings, remainingAmount, progress) {
  // Format the monetary values
  targetAmountDisplay.textContent = `₹${formatNumber(targetAmount)}`;
  savedAmountDisplay.textContent = `₹${formatNumber(currentSavings)}`;
  remainingAmountDisplay.textContent = `₹${formatNumber(remainingAmount)}`;
  
  // Set the progress percentage text
  progressPercent.textContent = `${Math.round(progress)}%`;
  
  // Animate the progress bar
  setTimeout(() => {
    progressBar.style.width = `${progress}%`;
    
    // Set progress bar color based on percentage
    if (progress < 25) {
      progressBar.style.backgroundColor = var(--danger, '#ef4444');
    } else if (progress < 50) {
      progressBar.style.backgroundColor = var(--warning, '#f59e0b');
    } else if (progress < 75) {
      progressBar.style.backgroundColor = '#84cc16'; // lime
    } else {
      progressBar.style.backgroundColor = var(--success, '#22c55e');
    }
  }, 100);
}

// Format number with commas for thousands
function formatNumber(number) {
  return number.toLocaleString('en-IN');
}

// Show toast notification
function showToast(message, type = 'success') {
  toastMessage.textContent = message;
  
  // Set toast color based on type
  if (type === 'error') {
    toast.style.backgroundColor = var(--danger, '#ef4444');
  } else {
    toast.style.backgroundColor = var(--primary-dark, '#1e40af');
  }
  
  // Show toast
  toast.classList.remove('hidden');
  toast.classList.add('visible');
  
  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 300);
  }, 3000);
}

// Setup accordion functionality
function setupAccordion() {
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const accordionItem = header.parentElement;
      const isActive = accordionItem.classList.contains('active');
      
      // Close all accordion items first
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Toggle the clicked item (open if it was closed)
      if (!isActive) {
        accordionItem.classList.add('active');
      }
    });
  });
}
