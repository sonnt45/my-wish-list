const diecastOriginalModels = [
    {
        code: 'mb-g63',
        name: 'Mercedes-Benz AMG G63',
        length: 492.3,
        width: 193.8,
        height: 198.4
    },
    {
        code: 'mb-s650',
        name: 'Mercedes-Benz Maybach S650 (2020)',
        length: 546.6,
        width: 189.9,
        height: 149.8
    },
    {
        code: 'mb-s650',
        name: 'Mercedes-Benz Maybach S650 (2020)',
        length: 546.6,
        width: 189.9,
        height: 149.8
    },
    {
        code: 'lr-rr-svautobiography',
        name: 'Land Rover Range Rover SVAutobiography',
        length: 499.9,
        width: 200.0,
        height: 183.5
    },
    {
        code: 'rr-cullinan',
        name: 'Rolls-Royce Cullinan',
        length: 534.1,
        width: 200.0,
        height: 183.5
    },
    {
        code: 'rr-phantom-8',
        name: 'Rolls Royce Phantom VIII',
        length: 576.2,
        width: 201.8,
        height: 164.6
    }
];

const getOriginalModel = function (code) {
    let result;
    $.each(diecastOriginalModels, function (index, model) {
        if (model.code === code) {
            result = model;
        }
    });

    return result;
}
