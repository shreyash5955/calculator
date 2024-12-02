// Predefined growth data: weight (kg) and height (cm) by month (Indian averages)
const growthData = [
    { months: 0, weight: 3.5, height: 51 }, { months: 1, weight: 4.2, height: 55 },
    { months: 2, weight: 4.9, height: 58 }, { months: 3, weight: 5.5, height: 60 },
    { months: 4, weight: 6.0, height: 62 }, { months: 5, weight: 6.4, height: 63.5 },
    { months: 6, weight: 6.8, height: 65 }, { months: 7, weight: 7.2, height: 66.5 },
    { months: 8, weight: 7.5, height: 68 }, { months: 9, weight: 7.8, height: 69 },
    { months: 10, weight: 8.1, height: 70 }, { months: 11, weight: 8.3, height: 71 },
    { months: 12, weight: 8.6, height: 72 }, { months: 13, weight: 8.9, height: 73 },
    { months: 14, weight: 9.1, height: 74 }, { months: 15, weight: 9.4, height: 75 },
    { months: 16, weight: 9.6, height: 76 }, { months: 17, weight: 9.8, height: 77 },
    { months: 18, weight: 10.0, height: 78 }, { months: 19, weight: 10.2, height: 79 },
    { months: 20, weight: 10.4, height: 80 }, { months: 21, weight: 10.6, height: 81 },
    { months: 22, weight: 10.8, height: 82 }, { months: 23, weight: 11.0, height: 83 },
    { months: 24, weight: 11.2, height: 84 }, { months: 25, weight: 11.3, height: 84.5 },
    { months: 72, weight: 16.0, height: 107 }
];

// Function to get growth data based on age
function getGrowthData(ageInMonths) {
    // Find the closest match for the age
    let closestData = growthData[0];
    let closestDifference = Math.abs(growthData[0].months - ageInMonths);

    for (const data of growthData) {
        const difference = Math.abs(data.months - ageInMonths);
        if (difference < closestDifference) {
            closestDifference = difference;
            closestData = data;
        }
    }

    return closestData;
}

// Event listener for form submission
document.getElementById('ageForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const yearsInput = document.getElementById('years').value;
    const monthsInput = document.getElementById('months').value;

    if (!yearsInput || !monthsInput) {
        alert("Please enter both years and months.");
        return;
    }

    const ageInMonths = (parseInt(yearsInput) * 12) + parseInt(monthsInput);
    const growthDataResult = getGrowthData(ageInMonths);

    document.getElementById('age').textContent = `Age: ${yearsInput} years and ${monthsInput} months`;
    document.getElementById('weight').textContent = `Average Weight: ${growthDataResult.weight} kg`;
    document.getElementById('height').textContent = `Average Height: ${growthDataResult.height} cm`;
    document.getElementById('result').classList.remove('hidden');
});
