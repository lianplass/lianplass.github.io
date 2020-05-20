var wms_layers = [];


        var lyr_OSMStandardBasemap_0 = new ol.layer.Tile({
            'title': 'OSM Standard Basemap',
            'type': 'base',
            'opacity': 1.000000,
            
maxResolution:115.47809644682133,

            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Counties_1 = new ol.format.GeoJSON();
var features_Counties_1 = format_Counties_1.readFeatures(json_Counties_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Counties_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Counties_1.addFeatures(features_Counties_1);
var lyr_Counties_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Counties_1, minResolution:115.47809644682133,

                style: style_Counties_1,
                interactive: false,
                title: '<img src="styles/legend/Counties_1.png" /> Counties'
            });
var format_CityLimits_2 = new ol.format.GeoJSON();
var features_CityLimits_2 = format_CityLimits_2.readFeatures(json_CityLimits_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CityLimits_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CityLimits_2.addFeatures(features_CityLimits_2);
var lyr_CityLimits_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CityLimits_2,
maxResolution:115.47809644682133,
 
                style: style_CityLimits_2,
                interactive: false,
                title: '<img src="styles/legend/CityLimits_2.png" /> City Limits'
            });

lyr_OSMStandardBasemap_0.setVisible(true);lyr_Counties_1.setVisible(true);lyr_CityLimits_2.setVisible(true);
var layersList = [lyr_OSMStandardBasemap_0,lyr_Counties_1,lyr_CityLimits_2];
lyr_Counties_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DEPCODE': 'DEPCODE', 'COUNTY': 'COUNTY', 'COUNTYNAME': 'COUNTYNAME', 'DATESTAMP': 'DATESTAMP', 'ShapeSTAre': 'ShapeSTAre', 'ShapeSTLen': 'ShapeSTLen', });
lyr_CityLimits_2.set('fieldAliases', {'PLACEFP': 'PLACEFP', 'BEBR_ID': 'BEBR_ID', 'NAME': 'NAME', 'COUNTY': 'COUNTY', 'TAX_COUNT': 'TAX_COUNT', 'TAXAUTHCD': 'TAXAUTHCD', 'NOTES': 'NOTES', 'ACRES': 'ACRES', 'DESCRIPT': 'DESCRIPT', 'FGDLAQDATE': 'FGDLAQDATE', 'AUTOID': 'AUTOID', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Counties_1.set('fieldImages', {'OBJECTID': 'Range', 'DEPCODE': 'Range', 'COUNTY': 'TextEdit', 'COUNTYNAME': 'TextEdit', 'DATESTAMP': 'DateTime', 'ShapeSTAre': 'TextEdit', 'ShapeSTLen': 'TextEdit', });
lyr_CityLimits_2.set('fieldImages', {'PLACEFP': 'TextEdit', 'BEBR_ID': 'TextEdit', 'NAME': 'TextEdit', 'COUNTY': 'TextEdit', 'TAX_COUNT': 'TextEdit', 'TAXAUTHCD': 'TextEdit', 'NOTES': 'TextEdit', 'ACRES': 'TextEdit', 'DESCRIPT': 'TextEdit', 'FGDLAQDATE': 'DateTime', 'AUTOID': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_Counties_1.set('fieldLabels', {'OBJECTID': 'no label', 'DEPCODE': 'no label', 'COUNTY': 'inline label', 'COUNTYNAME': 'no label', 'DATESTAMP': 'no label', 'ShapeSTAre': 'no label', 'ShapeSTLen': 'no label', });
lyr_CityLimits_2.set('fieldLabels', {'PLACEFP': 'no label', 'BEBR_ID': 'no label', 'NAME': 'no label', 'COUNTY': 'header label', 'TAX_COUNT': 'no label', 'TAXAUTHCD': 'no label', 'NOTES': 'no label', 'ACRES': 'no label', 'DESCRIPT': 'no label', 'FGDLAQDATE': 'no label', 'AUTOID': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_CityLimits_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});