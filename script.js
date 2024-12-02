// Updated growth data with increased weight for Indian children
const growthData = [
    { months: 0, weight: 3.2, height: 47 },
    { months: 1, weight: 3.8, height: 50 },
    { months: 2, weight: 4.4, height: 53 },
    { months: 3, weight: 5.0, height: 55 },
    { months: 4, weight: 5.5, height: 57 },
    { months: 5, weight: 6.0, height: 59 },
    { months: 6, weight: 6.5, height: 61 },
    { months: 7, weight: 6.9, height: 63 },
    { months: 8, weight: 7.3, height: 64 },
    { months: 9, weight: 7.6, height: 65 },
    { months: 10, weight: 7.9, height: 66 },
    { months: 11, weight: 8.2, height: 67 },
    { months: 12, weight: 8.5, height: 68 },
    { months: 13, weight: 8.8, height: 69 },
    { months: 14, weight: 9.1, height: 70 },
    { months: 15, weight: 9.4, height: 71 },
    { months: 16, weight: 9.7, height: 72 },
    { months: 17, weight: 9.9, height: 73 },
    { months: 18, weight: 10.2, height: 74 },
    { months: 19, weight: 10.5, height: 75 },
    { months: 20, weight: 10.8, height: 76 },
    { months: 21, weight: 11.0, height: 77 },
    { months: 22, weight: 11.3, height: 78 },
    { months: 23, weight: 11.5, height: 79 },
    { months: 24, weight: 11.8, height: 80 },
    { months: 25, weight: 12.0, height: 81 },
    { months: 26, weight: 12.3, height: 82 },
    { months: 27, weight: 12.5, height: 83 },
    { months: 28, weight: 12.8, height: 84 },
    { months: 29, weight: 13.0, height: 85 },
    { months: 30, weight: 13.2, height: 86 },
    { months: 31, weight: 13.4, height: 87 },
    { months: 32, weight: 13.6, height: 88 },
    { months: 33, weight: 13.8, height: 89 },
    { months: 34, weight: 14.0, height: 90 },
    { months: 35, weight: 14.2, height: 91 },
    { months: 36, weight: 14.4, height: 92 },
    { months: 37, weight: 14.6, height: 93 },
    { months: 38, weight: 14.8, height: 94 },
    { months: 39, weight: 15.0, height: 95 },
    { months: 40, weight: 15.2, height: 96 },
    { months: 41, weight: 15.4, height: 97 },
    { months: 42, weight: 15.6, height: 98 },
    { months: 43, weight: 15.8, height: 99 },
    { months: 44, weight: 16.0, height: 100 },
    { months: 45, weight: 16.2, height: 101 },
    { months: 46, weight: 16.4, height: 102 },
    { months: 47, weight: 16.6, height: 103 },
    { months: 48, weight: 16.8, height: 104 },
    { months: 49, weight: 17.0, height: 105 },
    { months: 50, weight: 17.2, height: 106 },
    { months: 51, weight: 17.4, height: 107 },
    { months: 52, weight: 17.6, height: 108 },
    { months: 53, weight: 17.8, height: 109 },
    { months: 54, weight: 18.0, height: 110 },
    { months: 55, weight: 18.2, height: 111 },
    { months: 56, weight: 18.4, height: 112 },
    { months: 57, weight: 18.6, height: 113 },
    { months: 58, weight: 18.8, height: 114 },
    { months: 59, weight: 19.0, height: 115 },
    { months: 60, weight: 19.2, height: 116 },
    { months: 61, weight: 19.4, height: 117 },
    { months: 62, weight: 19.6, height: 118 },
    { months: 63, weight: 19.8, height: 119 },
    { months: 64, weight: 20.0, height: 120 },
    { months: 65, weight: 20.2, height: 121 },
    { months: 66, weight: 20.4, height: 122 },
    { months: 67, weight: 20.6, height: 123 },
    { months: 68, weight: 20.8, height: 124 },
    { months: 69, weight: 21.0, height: 125 },
    { months: 70, weight: 21.2, height: 126 },
    { months: 71, weight: 21.4, height: 127 },
    { months: 72, weight: 21.6, height: 128 }
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
