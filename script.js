
document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const monthlyExpensesInput = document.getElementById('monthlyExpenses');
  const currentSavingsInput = document.getElementById('currentSavings');
  const monthsSlider = document.getElementById('months');
  const monthsLabel = document.getElementById('monthsLabel');
  const calculateBtn = document.getElementById('calculateBtn');
  const resultDisplay = document.getElementById('resultDisplay');
  const progressIndicator = document.getElementById('progressIndicator');
  const progressPercent = document.getElementById('progressPercent');
  const targetAmount = document.getElementById('targetAmount');
  const savedAmount = document.getElementById('savedAmount');
  const remainingAmount = document.getElementById('remainingAmount');
  const toast = document.getElementById('toast');
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');
  const accordionButtons = document.querySelectorAll('.accordion-button');

  // Update months label when slider changes
  monthsSlider.addEventListener('input', function() {
    monthsLabel.textContent = `Months of Expenses to Save: ${this.value}`;
  });

  // Calculate emergency fund
  calculateBtn.addEventListener('click', function() {
    const monthlyExpenses = parseFloat(monthlyExpensesInput.value) || 0;
    const currentSavings = parseFloat(currentSavingsInput.value) || 0;
    const months = parseInt(monthsSlider.value);
    
    if (monthlyExpenses <= 0) {
      showToast('Invalid Input', 'Monthly expenses must be greater than zero.');
      return;
    }
    
    const emergencyFundTarget = monthlyExpenses * months;
    const remainingNeeded = Math.max(emergencyFundTarget - currentSavings, 0);
    const progressPercentage = Math.min((currentSavings / emergencyFundTarget) * 100, 100);
    
    // Update the UI
    targetAmount.textContent = formatCurrency(emergencyFundTarget);
    savedAmount.textContent = formatCurrency(currentSavings);
    remainingAmount.textContent = formatCurrency(remainingNeeded);
    
    // Update progress bar
    progressIndicator.style.width = `${progressPercentage}%`;
    progressPercent.textContent = `${Math.round(progressPercentage)}%`;
    
    // Set progress bar color based on percentage
    if (progressPercentage < 25) {
      progressIndicator.style.backgroundColor = '#ef4444'; // Red
    } else if (progressPercentage < 50) {
      progressIndicator.style.backgroundColor = '#f97316'; // Orange
    } else if (progressPercentage < 75) {
      progressIndicator.style.backgroundColor = '#eab308'; // Yellow
    } else if (progressPercentage < 100) {
      progressIndicator.style.backgroundColor = '#84cc16'; // Lime
    } else {
      progressIndicator.style.backgroundColor = '#22c55e'; // Green
    }
    
    // Show result
    resultDisplay.style.display = 'block';
    
    // Show toast notification
    showToast('Emergency Fund Calculated!', 
      `Your recommended emergency fund is ${formatCurrency(emergencyFundTarget)}.`);
  });
  
  // Handle accordion functionality
  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('active');
      
      const content = this.nextElementSibling;
      
      if (this.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    });
  });

  // Format currency in Indian Rupees
  function formatCurrency(amount) {
    return '₹' + amount.toLocaleString('en-IN');
  }
  
  // Show toast notification
  function showToast(title, message) {
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 5000);
  }
});
