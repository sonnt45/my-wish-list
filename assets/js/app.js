const initLegoTab = function () {
    const brands = [
        {
            code: 'mouldking',
            name: 'MouldKing',
            website: 'https://mouldking.store/'
        },
        {
            code: 'cada',
            name: 'CADA',
            website: 'javascript:void(0)'
        },
        {
            code: 'lisong',
            name: 'LISONG',
            website: 'javascript:void(0)'
        },
        {
            code: 'pinbao',
            name: 'PINBAO',
            website: 'javascript:void(0)'
        },
        {
            code: 'mork',
            name: 'MORK',
            website: 'javascript:void(0)'
        }
    ];

    const sets = [
        {
            code: '16043',
            brandCode: 'mouldking',
            mocCode: '67005',
            name: 'Art Gallery Showcase',
            series: 'Novatown',
            pieces: 3536,
            price: '',
            tags: 'Modern, Gallery',
            reference: 'https://mouldking.store/shop/mouldking-16043-moc-67005-novatown-art-gallery-showcase-with-3536-pieces',
            images: [
                'https://mouldking.store/wp-content/uploads/2021/05/mouldking-16043-moc-67005-novatown-art-gallery-showcase-with-3536-pieces.jpg',
                'https://mouldking.store/wp-content/uploads/2021/05/mouldking-16043-moc-67005-novatown-art-gallery-showcase-with-3536-pieces-1.jpg',
                'https://mouldking.store/wp-content/uploads/2021/05/mouldking-16043-moc-67005-novatown-art-gallery-showcase-with-3536-pieces-2.jpg',
                'https://mouldking.store/wp-content/uploads/2021/05/mouldking-16043-moc-67005-novatown-art-gallery-showcase-with-3536-pieces-3.jpg',
                'https://mouldking.store/wp-content/uploads/2021/05/mouldking-16043-moc-67005-novatown-art-gallery-showcase-with-3536-pieces-4.jpg'
            ]
        },
        {
            code: '16036',
            brandCode: 'mouldking',
            mocCode: '45635',
            name: 'Starbucks Modern Coffee Shop',
            series: 'Novatown',
            pieces: 2728,
            price: '',
            tags: 'Modern, Coffee',
            reference: 'https://mouldking.store/shop/mould-king-16036-modern-cafe-modular',
            images: [
                'https://mouldking.store/wp-content/uploads/2021/01/O1CN01psIg9m2BgavRwiIo4__3038978368-0-cib.jpg',
                'https://mouldking.store/wp-content/uploads/2021/01/O1CN01O8msDC2BgavT2rXre__3038978368-0-cib-600x600.jpg',
                'https://mouldking.store/wp-content/uploads/2021/01/O1CN01RSqmBm2BgavHM1U4v__3038978368-0-cib-600x600.jpg',
                'https://mouldking.store/wp-content/uploads/2021/01/O1CN01WR75Qe2BgavSeyxjL__3038978368-0-cib-600x600.jpg',
                'https://mouldking.store/wp-content/uploads/2021/01/O1CN014Bm4BF2BgavSeyh41__3038978368-0-cib.jpg'
            ]
        },
        {
            code: '16042',
            brandCode: 'mouldking',
            mocCode: '53084',
            name: 'ISLET Pub & Restaurant',
            series: 'Novatown',
            pieces: 3992,
            price: '',
            tags: 'Modern, Coffee',
            reference: 'https://mouldking.store/shop/mould-king-16042-the-bar-with-lights',
            images: [
                'https://mouldking.store/wp-content/uploads/2021/01/O1CN01EHl3DW2BgavNFcfz3__3038978368-0-cib.jpg',
                'https://mouldking.store/wp-content/uploads/2021/01/O1CN01KH4b4C2BgavSeJjz5__3038978368-0-cib-600x600.jpg',
                'https://mouldking.store/wp-content/uploads/2021/01/O1CN01SNvhgE2BgavUbkfcv__3038978368-0-cib-600x600.jpg',
                'https://mouldking.store/wp-content/uploads/2021/01/O1CN01LVR3os2BgavM2lT5n__3038978368-0-cib-600x600.jpg',
                'https://mouldking.store/wp-content/uploads/2021/01/O1CN01J1BZXD1Ub4fp2V9ID__2206786762535-0-cib.jpg'
            ]
        },
        {
            code: '16003',
            brandCode: 'mouldking',
            mocCode: '',
            name: 'Angel Square',
            series: 'Novatown',
            pieces: 2960,
            price: '',
            tags: 'Modern, Square',
            reference: 'https://mouldking.store/shop/mouldking-16003-aovatown-angel-square-with-light-with-2960-pieces',
            images: [
                'https://mouldking.store/wp-content/uploads/2021/05/mouldking-16003-aovatown-angel-square-with-light-with-2960-pieces.jpg',
                'https://mouldking.store/wp-content/uploads/2021/05/mouldking-16003-aovatown-angel-square-with-light-with-2960-pieces-1-600x600.jpg',
                'https://mouldking.store/wp-content/uploads/2021/05/mouldking-16003-aovatown-angel-square-with-light-with-2960-pieces-2.jpg',
                'https://mouldking.store/wp-content/uploads/2021/05/mouldking-16003-aovatown-angel-square-with-light-with-2960-pieces-3-600x600.jpg'
            ]
        },
        {
            code: 'C66005',
            brandCode: 'cada',
            mocCode: '',
            name: 'Starbucks Coffee House',
            series: '',
            pieces: 768,
            price: '',
            tags: 'Modern, Coffee',
            reference: 'https://mouldking.store/shop/cada-c66005-coffee-house-with-768-pieces',
            images: [
                'https://mouldking.store/wp-content/uploads/2022/03/CaDA-C66005-Coffee-Shop-1.jpg',
                'https://mouldking.store/wp-content/uploads/2022/03/CaDA-C66005-Coffee-Shop-3.jpg',
                'https://mouldking.store/wp-content/uploads/2022/03/CaDA-C66005-Coffee-Shop-4.jpg',
                'https://mouldking.store/wp-content/uploads/2022/03/CaDA-C66005-Coffee-Shop-2-600x600.jpg'
            ]
        },
        {
            code: '88001',
            brandCode: 'lisong',
            mocCode: '',
            name: 'Luxury Flagship Store',
            series: '',
            pieces: 3028,
            price: '',
            tags: 'Modern, Fashion',
            reference: 'https://mouldking.store/shop/lisong-88001-luxury-flagship-store-with-light-with-3028-pieces',
            images: [
                'https://mouldking.store/wp-content/uploads/2022/09/Modular-Buildings-Lisong-88001-Luxury-Flagship-Store-with-Light-1.jpg',
                'https://mouldking.store/wp-content/uploads/2022/09/Modular-Buildings-Lisong-88001-Luxury-Flagship-Store-with-Light-4-600x600.jpg',
                'https://mouldking.store/wp-content/uploads/2022/09/Modular-Buildings-Lisong-88001-Luxury-Flagship-Store-with-Light-3-600x600.jpg',
                'https://mouldking.store/wp-content/uploads/2022/09/Modular-Buildings-Lisong-88001-Luxury-Flagship-Store-with-Light-2.jpg',
                'https://mouldking.store/wp-content/uploads/2022/09/Modular-Buildings-Lisong-88001-Luxury-Flagship-Store-with-Light-5-600x600.jpg'
            ]
        },
        {
            code: '7703',
            brandCode: 'pinbao',
            mocCode: '',
            name: 'Astronomical Observatory',
            series: '',
            pieces: 3961,
            price: '',
            tags: 'Modern, Astronomical Observatory',
            reference: 'https://mouldking.store/shop/pinbao-7703-astronomical-observatory-with-3961-pieces',
            images: [
                'https://mouldking.store/wp-content/uploads/2023/05/image-107.png',
                'https://mouldking.store/wp-content/uploads/2023/05/PINBAO-7703-Astronomical-Observatory-2.jpg',
                'https://mouldking.store/wp-content/uploads/2023/05/PINBAO-7703-Astronomical-Observatory-1.jpg',
                'https://mouldking.store/wp-content/uploads/2023/05/PINBAO-7703-Astronomical-Observatory-5.jpg',
                'https://mouldking.store/wp-content/uploads/2023/05/PINBAO-7703-Astronomical-Observatory-4.jpg',
                'https://mouldking.store/wp-content/uploads/2023/05/PINBAO-7703-Astronomical-Observatory-3.jpg'
            ]
        },
        {
            code: '011001',
            brandCode: 'mork',
            mocCode: '',
            name: 'Modern Library',
            series: '',
            pieces: 2789,
            price: '',
            tags: 'Modern, Library',
            reference: 'https://mouldking.store/shop/mork-011001-modern-library-modular-building',
            images: [
                'https://mouldking.store/wp-content/uploads/2021/09/mork_011001_modern_library_modular_building_4751.jpg',
                'https://mouldking.store/wp-content/uploads/2021/09/mork_011001_modern_library_modular_building_5467.jpg',
                'https://mouldking.store/wp-content/uploads/2021/09/mork_011001_modern_library_modular_building_3287.jpg',
                'https://mouldking.store/wp-content/uploads/2021/09/mork_011001_modern_library_modular_building_8968.jpg',
                'https://mouldking.store/wp-content/uploads/2021/09/mork_011001_modern_library_modular_building_1473.jpg'
            ]
        }
    ];

    const getBrand = function (code) {
        let result;
        $.each(brands, function (index, brand) {
            if (brand.code === code) {
                result = brand;
            }
        });

        return result;
    }

    const appendSet = function (index) {
        $('#lego-tab').append(
            '<div class="card mb-4">' +
            '<div class="card-body">' +
            '<div class="row">' +
            appendSetImages(index) +
            appendSetInfo(index) +
            '</div>' +
            '</div>' +
            '</div>'
        );
    };

    const appendSetImages = function (index) {
        let html = '<div class="col-lg-4 col-sm-12">' +
            '<div id="lego-carousel-' + index + '" class="carousel slide" data-ride="carousel">' +
            '<ol class="carousel-indicators">';
        $.each(sets[index].images, function (imageIndex, image) {
            if (imageIndex === 0) {
                html += '<li data-target="#lego-carousel-' + index + '" data-slide-to="' + imageIndex + '" class="active"></li>';
            } else {
                html += '<li data-target="#lego-carousel-' + index + '" data-slide-to="' + imageIndex + '"></li>';
            }
        });
        html += '</ol>' +
            '<div class="carousel-inner">';
        $.each(sets[index].images, function (imageIndex, image) {
            if (imageIndex === 0) {
                html += '<div class="carousel-item active"><img class="d-block w-100" src="' + image + '" alt=""></div>';
            } else {
                html += '<div class="carousel-item"><img class="d-block w-100" src="' + image + '" alt=""></div>';
            }
        });
        html += '</div>' +
            '<a class="carousel-control-prev" href="#lego-carousel-' + index + '" role="button" data-slide="prev">' +
            '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
            '<span class="sr-only">Previous</span>' +
            '</a>' +
            '<a class="carousel-control-next" href="#lego-carousel-' + index + '" role="button" data-slide="next">' +
            '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
            '<span class="sr-only">Next</span>' +
            '</a>' +
            '</div>' +
            '</div>';

        return html;
    };

    const appendSetInfo = function (index) {
        const brand = getBrand(sets[index].brandCode);

        return '<div class="col-lg-8 col-sm-12 mt-2">' +
            '<h3><a href="' + brand.website + '" target="_blank">' + brand.name + '</a> | <a href="' + sets[index].reference + '" target="_blank">' + sets[index].code + '</a></h3>' +
            '<h1>' + sets[index].name + '</h1>' +
            '<h4>Series: ' + sets[index].series + '</h4>' +
            '<h4>Pieces: ' + sets[index].pieces + '</h4>' +
            '<h4>Price: ' + sets[index].price + '</h4>' +
            '<h4>MOC No: ' + sets[index].mocCode + '</h4>' +
            '<h4>Tags: ' + sets[index].tags + '</h4>' +
            '</div>';
    };

    $.each(sets, function (index, set) {
        appendSet(index);
    });
};

const initDiecastTab = function () {
    const brands = [
        {
            code: 'cz',
            name: 'CZ'
        }
    ];

    const realModels = [
        {
            code: 'royce-phantom-8',
            name: 'Rolls Royce Phantom VIII',
            length: 576.2,
            width: 201.8,
            height: 164.6
        }
    ];

    const toyModels = [
        {
            brandCode: 'cz',
            realCode: 'royce-phantom-8',
            name: 'Rolls Royce Phantom VIII',
            colors: 'White & Black',
            scale: 32,
            length: 17,
            width: 5.5,
            height: 4,
            reference: 'https://mouldking.store/shop/mork-011001-modern-library-modular-building',
            images: [
                'https://mouldking.store/wp-content/uploads/2021/09/mork_011001_modern_library_modular_building_4751.jpg',
                'https://mouldking.store/wp-content/uploads/2021/09/mork_011001_modern_library_modular_building_5467.jpg'
            ]
        }
    ];

    const getBrand = function (code) {
        let result;
        $.each(brands, function (index, brand) {
            if (brand.code === code) {
                result = brand;
            }
        });

        return result;
    }

    const getRealModel = function (code) {
        let result;
        $.each(realModels, function (index, model) {
            if (model.code === code) {
                result = model;
            }
        });

        return result;
    }

    const appendModel = function (index) {
        $('#diecast-tab').append(
            '<div class="card mb-4">' +
            '<div class="card-body">' +
            '<div class="row">' +
            appendModelImages(index) +
            appendModelInfo(index) +
            '</div>' +
            '</div>' +
            '</div>'
        );
    };

    const appendModelImages = function (index) {
        let html = '<div class="col-lg-4 col-sm-12">' +
            '<div id="diecast-carousel-' + index + '" class="carousel slide" data-ride="carousel">' +
            '<ol class="carousel-indicators">';
        $.each(toyModels[index].images, function (imageIndex, image) {
            if (imageIndex === 0) {
                html += '<li data-target="#diecast-carousel-' + index + '" data-slide-to="' + imageIndex + '" class="active"></li>';
            } else {
                html += '<li data-target="#diecast-carousel-' + index + '" data-slide-to="' + imageIndex + '"></li>';
            }
        });
        html += '</ol>' +
            '<div class="carousel-inner">';
        $.each(toyModels[index].images, function (imageIndex, image) {
            if (imageIndex === 0) {
                html += '<div class="carousel-item active"><img class="d-block w-100" src="' + image + '" alt=""></div>';
            } else {
                html += '<div class="carousel-item"><img class="d-block w-100" src="' + image + '" alt=""></div>';
            }
        });
        html += '</div>' +
            '<a class="carousel-control-prev" href="#diecast-carousel-' + index + '" role="button" data-slide="prev">' +
            '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
            '<span class="sr-only">Previous</span>' +
            '</a>' +
            '<a class="carousel-control-next" href="#diecast-carousel-' + index + '" role="button" data-slide="next">' +
            '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
            '<span class="sr-only">Next</span>' +
            '</a>' +
            '</div>' +
            '</div>';

        return html;
    };

    const appendModelInfo = function (index) {
        const brand = getBrand(toyModels[index].brandCode);
        const realModel = getRealModel(toyModels[index].realCode);
        const toyModel = toyModels[index];

        return '<div class="col-lg-8 col-sm-12 mt-2">' +
            '<h1>' + toyModel.name + '</h1>' +
            '<h6>Brand: ' + brand.name + '</h6>' +
            '<h6>Colors: ' + toyModel.colors + '</h6>' +
            '<h6>Scale: 1:' + toyModel.scale + '</h6>' +
            '<table class="table table-hover">' +
            '<thead>' +
            '<tr>' +
            '<th></th>' +
            '<th>Length</th>' +
            '<th>Width</th>' +
            '<th>Height</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<td>Model Dimensions (cm)</td>' +
            '<td>' + toyModel.length + '</td>' +
            '<td>' + toyModel.width + '</td>' +
            '<td>' + toyModel.height + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Real Dimensions (cm)</td>' +
            '<td>' + realModel.length + '</td>' +
            '<td>' + realModel.width + '</td>' +
            '<td>' + realModel.height + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Scale</td>' +
            '<td>1:' + Math.round(1 / (toyModel.length / realModel.length)) + '</td>' +
            '<td>1:' + Math.round(1 / (toyModel.width / realModel.width)) + '</td>' +
            '<td>1:' + Math.round(1 / (toyModel.height / realModel.height)) + '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div>';
    };

    $.each(toyModels, function (index, model) {
        appendModel(index);
    });
};


$(document).ready(function () {
    initLegoTab();
    initDiecastTab();
});