// Growth data for Indian children (age in months, weight in kg, height in cm)
// Data adjusted to reflect a more gradual growth, especially after 3 years.
const growthData = [
    { months: 0, weight: 2.6, height: 47 },
    { months: 1, weight: 3.2, height: 50 },
    { months: 2, weight: 3.8, height: 53 },
    { months: 3, weight: 4.3, height: 55 },
    { months: 4, weight: 4.7, height: 57 },
    { months: 5, weight: 5.2, height: 59 },
    { months: 6, weight: 5.5, height: 61 },
    { months: 7, weight: 5.8, height: 63 },
    { months: 8, weight: 6.1, height: 64 },
    { months: 9, weight: 6.3, height: 65 },
    { months: 10, weight: 6.6, height: 66 },
    { months: 11, weight: 6.8, height: 67 },
    { months: 12, weight: 7.1, height: 68 },
    { months: 13, weight: 7.3, height: 69 },
    { months: 14, weight: 7.6, height: 70 },
    { months: 15, weight: 7.9, height: 71 },
    { months: 16, weight: 8.1, height: 72 },
    { months: 17, weight: 8.3, height: 73 },
    { months: 18, weight: 8.5, height: 74 },
    { months: 19, weight: 8.7, height: 75 },
    { months: 20, weight: 8.9, height: 76 },
    { months: 21, weight: 9.1, height: 77 },
    { months: 22, weight: 9.3, height: 78 },
    { months: 23, weight: 9.5, height: 79 },
    { months: 24, weight: 9.7, height: 80 },
    { months: 25, weight: 9.9, height: 81 },
    { months: 26, weight: 10.1, height: 82 },
    { months: 27, weight: 10.3, height: 83 },
    { months: 28, weight: 10.5, height: 84 },
    { months: 29, weight: 10.7, height: 85 },
    { months: 30, weight: 10.9, height: 86 },
    { months: 31, weight: 11.1, height: 87 },
    { months: 32, weight: 11.3, height: 88 },
    { months: 33, weight: 11.5, height: 89 },
    { months: 34, weight: 11.7, height: 90 },
    { months: 35, weight: 11.9, height: 91 },
    { months: 36, weight: 12.1, height: 92 },
    { months: 37, weight: 12.3, height: 93 },
    { months: 38, weight: 12.5, height: 94 },
    { months: 39, weight: 12.7, height: 95 },
    { months: 40, weight: 12.9, height: 96 },
    { months: 41, weight: 13.1, height: 97 },
    { months: 42, weight: 13.3, height: 98 },
    { months: 43, weight: 13.5, height: 99 },
    { months: 44, weight: 13.7, height: 100 },
    { months: 45, weight: 13.9, height: 101 },
    { months: 46, weight: 14.1, height: 102 },
    { months: 47, weight: 14.3, height: 103 },
    { months: 48, weight: 14.5, height: 104 },
    { months: 49, weight: 14.7, height: 105 },
    { months: 50, weight: 14.9, height: 106 },
    { months: 51, weight: 15.1, height: 107 },
    { months: 52, weight: 15.3, height: 108 },
    { months: 53, weight: 15.5, height: 109 },
    { months: 54, weight: 15.7, height: 110 },
    { months: 55, weight: 15.9, height: 111 },
    { months: 56, weight: 16.1, height: 112 },
    { months: 57, weight: 16.3, height: 113 },
    { months: 58, weight: 16.5, height: 114 },
    { months: 59, weight: 16.7, height: 115 },
    { months: 60, weight: 16.9, height: 116 },
    { months: 61, weight: 17.1, height: 117 },
    { months: 62, weight: 17.3, height: 118 },
    { months: 63, weight: 17.5, height: 119 },
    { months: 64, weight: 17.7, height: 120 },
    { months: 65, weight: 17.9, height: 121 },
    { months: 66, weight: 18.1, height: 122 },
    { months: 67, weight: 18.3, height: 123 },
    { months: 68, weight: 18.5, height: 124 },
    { months: 69, weight: 18.7, height: 125 },
    { months: 70, weight: 18.9, height: 126 },
    { months: 71, weight: 19.1, height: 127 },
    { months: 72, weight: 19.3, height: 128 }
];

// Function to calculate age in months
function calculateAgeInMonths(years, months) {
    return years * 12 + months;
}

// Function to get growth data based on age in months
function getGrowthData(ageInMonths) {
    return growthData.find(data => data.months === ageInMonths) || null;
}

// Handle Enter key functionality
document.getElementById('years').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('months').focus();
    }
});

document.getElementById('months').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        calculateGrowthData();
    }
});

// Handle calculate button click
document.getElementById('calculateBtn').addEventListener('click', calculateGrowthData);

// Function to calculate and display growth data
function calculateGrowthData() {
    const years = document.getElementById('years').value;
    const months = document.getElementById('months').value;

    if (years === '' || months === '') {
        alert("Please enter both years and months.");
        return;
    }

    const ageInMonths = calculateAgeInMonths(parseInt(years), parseInt(months));
    const growthResult = getGrowthData(ageInMonths);

    if (growthResult) {
        document.getElementById('weight').textContent = `${growthResult.weight} kg`;
        document.getElementById('height').textContent = `${growthResult.height} cm`;
        document.getElementById('result').style.display = 'block';
    } else {
        alert("Growth data not found for the entered age.");
    }
}
