var tesla = 
{
    models:
    {
        Tesla_Model_3: 
        {
            carName: "Tesla Model 3",
            features:
            {
                seats: 5,
                doors: 4,
                topSpeed: 140,
                torque: 302,
                horsepower: 480,
                range: 353,
                batterySize: 80,
                acceleration: 3.1,
            },
            cost:
            {
                cash: 39990 + 1200,
                loan: 
                {
                    monthlyPayments: Math.round(100*(((39990+(39990*0.0249)) - 4500) / 72))/100, //per month
                    downPayment: 4500,
                    months: 72,
                    APR: 2.49,
                },
                sellingPrice: Math.round(100*(39990+1200+(39990*0.0249)))/100,
                deliveryCharge: 1200
            }
        },
        Tesla_Model_Y:
        {
            carName: "Tesla Model Y",
            features:
            {
                seats: 5,
                doors: 4,
                topSpeed: 135,
                torque: 389,
                horsepower: 384,
                range: 326,
                batterySize: 75,
                acceleration: 4.8,
            },
            cost:
            {
                cash: 53990 + 1200,
                loan: 
                {
                    monthlyPayments: Math.round(100*(((53990+(53990*0.0249)) - 4500) / 72))/100, //per month
                    downPayment: 4500,
                    months: 72,
                    APR: 2.49
                },
                sellingPrice: Math.round(100*(53990+1200+(53990*0.0249)))/100,
                deliveryCharge: 1200
            }
        },
        Tesla_Model_S:
        {
            carName: "Tesla Model S",
            features:
            {
                seats: 5,
                doors: 4,
                topSpeed: 200,
                torque: 487,
                horsepower: 670,
                range: 405,
                batterySize:100,
                acceleration:2.07,
            },
            cost:
            {
                cash: 89990 + 1200,
                loan: 
                {
                    monthlyPayments: Math.round(100*(((89990+(89990*0.0249)) - 7500) / 72))/100, //per month
                    downPayment: 7500,
                    months: 72,
                    APR: 2.49,
                },
                sellingPrice: Math.round(100*(89990+1200+(89990*0.0249)))/100,
                deliveryCharge: 1200
            }
        },
        Tesla_Model_X:
        {
            carName: "Tesla Model X",
            features:
            {
                seats: 7,
                doors: 4,
                topSpeed: 155,
                torque: 487,
                horsepower: 670,
                range: 396,
                batterySize:100,
                acceleration:3.8,
            },
            cost:
            {
                cash: 99990 + 1200,
                loan: 
                {
                    monthlyPayments: Math.round(100*(((99990+(99990*0.0249)) - 7500) / 72))/100, //per month
                    downPayment: 7500,
                    months: 72,
                    APR: 2.49,
                },
                sellingPrice: Math.round(100*(99990+1200+(99990*0.0249)))/100,
                deliveryCharge: 1200
            }
        }
    }
}