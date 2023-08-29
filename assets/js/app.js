const initLegoTab = function () {
    const appendSet = function (index) {
        $('#lego-tab').append(
            '<div class="card mb-4">' +
            '<div class="card-body">' +
            '<div class="row">' +
            '<div class="col-lg-4 col-sm-12 pb-4">' +
            '<div id="lego-carousel-' + index + '" class="carousel slide" data-ride="carousel">' +
            appendSliderIndicators(index) +
            appendSliderImages(index) +
            appendSliderButtons(index) +
            '</div>' +
            '</div>' +
            '<div class="col-lg-8 col-sm-12">' +
            appendSubtitle(legoSets[index].code, legoSets[index].brand, legoSets[index].url) +
            appendTitle(legoSets[index].name, legoSets[index].url) +
            appendDescription(legoSets[index]) +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
        );
    };

    const appendSliderIndicators = function (index) {
        let html = '<ol class="carousel-indicators">';
        $.each(legoSets[index].images, function (imageIndex, image) {
            if (imageIndex === 0) {
                html += '<li data-target="#lego-carousel-' + index + '" data-slide-to="' + imageIndex + '" class="active"></li>';
            } else {
                html += '<li data-target="#lego-carousel-' + index + '" data-slide-to="' + imageIndex + '"></li>';
            }
        });

        return html + '</ol>';
    };

    const appendSliderImages = function (index) {
        let html = '<div class="carousel-inner">';
        $.each(legoSets[index].images, function (imageIndex, image) {
            if (imageIndex === 0) {
                html += '<div class="carousel-item active"><img class="d-block w-100" src="' + image + '" alt=""></div>';
            } else {
                html += '<div class="carousel-item"><img class="d-block w-100" src="' + image + '" alt=""></div>';
            }
        });

        return html + '</div>';
    };

    const appendSliderButtons = function (index) {
        return '<a class="carousel-control-prev" href="#lego-carousel-' + index + '" role="button" data-slide="prev">' +
            '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
            '<span class="sr-only">Previous</span>' +
            '</a>' +
            '<a class="carousel-control-next" href="#lego-carousel-' + index + '" role="button" data-slide="next">' +
            '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
            '<span class="sr-only">Next</span>' +
            '</a>';
    };

    const appendTitle = function (name, url) {
        let html = '<div class="title">';
        if (url === undefined) {
            html += '<a href="javascript:void(0)">' + name + '</a>';
        } else {
            html += '<a href="' + url + '" target="_blank">' + name + '</a>';
        }

        return html + '</div>';
    };

    const appendSubtitle = function (code, brand, url) {
        let html = '<div class="subtitle">';
        if (url === undefined) {
            if (brand === undefined) {
                html += '<a href="javascript:void(0)">' + code + '</a>';
            } else {
                html += '<a href="javascript:void(0)">' + brand + ' ' + code + '</a>';
            }
        } else {
            if (brand === undefined) {
                html += '<a href="' + url + '" target="_blank">' + code + '</a>';
            } else {
                html += '<a href="' + url + '" target="_blank">' + brand + ' ' + code + '</a>';
            }
        }

        return html + '</div>';
    };

    const appendDescription = function (set) {
        return '<div class="description">' +
            (set.category !== undefined ? '<p>Category: ' + set.category + '</p>' : '') +
            (set.brand !== undefined ? '<p>Brand: ' + set.brand + '</p>' : '') +
            (set.series !== undefined ? '<p>Series: ' + set.series + '</p>' : '') +
            (set.pieces !== undefined ? '<p>Pieces: ' + set.pieces + '</p>' : '') +
            (set.mocNo !== undefined ? '<p>MOC No: ' + set.mocNo + '</p>' : '') +
            (set.price !== undefined ? '<p>Price: ' + set.price + '</p>' : '') +
            '</div>';
    };

    $.each(legoSets, function (index, set) {
        appendSet(index);
    });
};

const initDieCastTab = function () {
    const appendModel = function (index) {
        const originalModel = getOriginalModel(diecastModels[index].originCode);

        $('#die-cast-tab').append(
            '<div class="card mb-4">' +
            '<div class="card-body">' +
            '<div class="row">' +
            '<div class="col-lg-4 col-sm-12 pb-4">' +
            '<div id="die-cast-carousel-' + index + '" class="carousel slide" data-ride="carousel">' +
            appendSliderIndicators(index) +
            appendSliderImages(index) +
            appendSliderButtons(index) +
            '</div>' +
            '</div>' +
            '<div class="col-lg-8 col-sm-12">' +
            appendTitle(originalModel.name, diecastModels[index].url) +
            appendDescription(diecastModels[index]) +
            appendComparisonTable(diecastModels[index], originalModel) +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
        );
    };

    const appendSliderIndicators = function (index) {
        let html = '<ol class="carousel-indicators">';
        $.each(diecastModels[index].images, function (imageIndex, image) {
            if (imageIndex === 0) {
                html += '<li data-target="#die-cast-carousel-' + index + '" data-slide-to="' + imageIndex + '" class="active"></li>';
            } else {
                html += '<li data-target="#die-cast-carousel-' + index + '" data-slide-to="' + imageIndex + '"></li>';
            }
        });

        return html + '</ol>';
    };

    const appendSliderImages = function (index) {
        let html = '<div class="carousel-inner">';
        $.each(diecastModels[index].images, function (imageIndex, image) {
            if (imageIndex === 0) {
                html += '<div class="carousel-item active"><img class="d-block w-100" src="' + image + '" alt=""></div>';
            } else {
                html += '<div class="carousel-item"><img class="d-block w-100" src="' + image + '" alt=""></div>';
            }
        });

        return html + '</div>';
    };

    const appendSliderButtons = function (index) {
        return '<a class="carousel-control-prev" href="#die-cast-carousel-' + index + '" role="button" data-slide="prev">' +
            '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
            '<span class="sr-only">Previous</span>' +
            '</a>' +
            '<a class="carousel-control-next" href="#die-cast-carousel-' + index + '" role="button" data-slide="next">' +
            '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
            '<span class="sr-only">Next</span>' +
            '</a>';
    };

    const appendTitle = function (name, url) {
        let html = '<div class="title">';
        if (url === undefined) {
            html += '<a href="javascript:void(0)">' + name + '</a>';
        } else {
            html += '<a href="' + url + '" target="_blank">' + name + '</a>';
        }

        return html + '</div>';
    };

    const appendDescription = function (model) {
        return '<div class="description">' +
            (model.brand !== undefined ? '<p>Brand: ' + model.brand + '</p>' : '') +
            (model.features !== undefined ? '<p>Features: ' + model.features + '</p>' : '') +
            (model.colors !== undefined ? '<p>Colors: ' + model.colors + '</p>' : '') +
            (model.scale !== undefined ? '<p>Scale: 1:' + model.scale + '</p>' : '') +
            (model.price !== undefined ? '<p>Price: ' + model.price + '.000 VND</p>' : '') +
            '</div>';
    };

    const appendComparisonTable = function (model, originalModel) {
        return '<table class="table table-hover">' +
            '<thead>' +
            '<tr>' +
            '<th>Comparison</th>' +
            '<th>Length</th>' +
            '<th>Width</th>' +
            '<th>Height</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<td>Model Dimensions (cm)</td>' +
            '<td>' + model.length + '</td>' +
            '<td>' + model.width + '</td>' +
            '<td>' + model.height + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Original Dimensions (cm)</td>' +
            '<td>' + originalModel.length + '</td>' +
            '<td>' + originalModel.width + '</td>' +
            '<td>' + originalModel.height + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Absolute Scale</td>' +
            '<td>1:' + Math.round(1 / (model.length / originalModel.length)) + '</td>' +
            '<td>1:' + Math.round(1 / (model.width / originalModel.width)) + '</td>' +
            '<td>1:' + Math.round(1 / (model.height / originalModel.height)) + '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>';
    };

    $.each(diecastModels, function (index, model) {
        appendModel(index);
    });
};

$(document).ready(function () {
    initLegoTab();
    initDieCastTab();
});