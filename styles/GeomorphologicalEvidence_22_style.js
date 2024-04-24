var size = 0;
var placement = 'point';
function categories_GeomorphologicalEvidence_22(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Coastal Flooding':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(28,75,205,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(28,187,205,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Debris Flow':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(233,151,88,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(233,151,88,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Land Slide':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(86,115,7,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(86,115,7,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'River Flood':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(40,68,250,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(40,68,250,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Riverbank Erosion':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(143,31,95,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(143,31,95,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rock Slide':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(242,96,106,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(242,96,106,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Alluvial Flooding':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(64,59,204,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(64,59,204,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_GeomorphologicalEvidence_22 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Field3");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_GeomorphologicalEvidence_22(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
