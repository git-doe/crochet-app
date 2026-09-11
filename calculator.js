function calculatePrice() {
    // Get inputs
    const yarnCost = parseFloat(document.getElementById('yarnCost').value) || 0;
    const extrasCost = parseFloat(document.getElementById('extrasCost').value) || 0;
    const hoursWorked = parseFloat(document.getElementById('hoursWorked').value) || 0;
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value) || 0;
    const profitMargin = parseFloat(document.getElementById('profitMargin').value) || 0;

    // Calculations
    const totalMaterials = yarnCost + extrasCost;
    const totalLabor = hoursWorked * hourlyRate;
    const baseCost = totalMaterials + totalLabor;
    
    const profit = baseCost * (profitMargin / 100);
    const finalPrice = baseCost + profit;

    // Output formatting
    document.getElementById('outMaterials').textContent = '$' + totalMaterials.toFixed(2);
    document.getElementById('outLabor').textContent = '$' + totalLabor.toFixed(2);
    document.getElementById('outProfit').textContent = '$' + profit.toFixed(2);
    document.getElementById('outTotal').textContent = '$' + finalPrice.toFixed(2);
}