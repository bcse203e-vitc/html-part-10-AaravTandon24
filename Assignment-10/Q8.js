document.addEventListener("DOMContentLoaded", () => {
    const countrySelect = document.getElementById('countrySelect');
    const stateSelect = document.getElementById('stateSelect');

    const countryStateMap = {
        USA: ["California", "Florida", "Texas", "New York", "Illinois"],
        India: ["Delhi", "Maharashtra", "Punjab", "Tamil Nadu", "Uttar Pradesh"],
        UK: ["England", "Scotland", "Wales", "Northern Ireland"]
    };

    countrySelect.addEventListener('change', () => {
        const selectedCountry = countrySelect.value;
        
        stateSelect.innerHTML = '<option value="">Select a State</option>';
        
        if (selectedCountry) {
            const states = countryStateMap[selectedCountry];
            
            states.forEach(state => {
                const option = document.createElement('option');
                option.value = state;
                option.textContent = state;
                stateSelect.appendChild(option);
            });
        }
    });
});
