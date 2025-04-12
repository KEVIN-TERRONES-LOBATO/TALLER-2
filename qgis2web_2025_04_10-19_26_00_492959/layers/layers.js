ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-79.558630, -6.583512, -77.934531, -5.381765]);
var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Cortado_1 = new ol.format.GeoJSON();
var features_Cortado_1 = format_Cortado_1.readFeatures(json_Cortado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Cortado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cortado_1.addFeatures(features_Cortado_1);
var lyr_Cortado_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cortado_1, 
                style: style_Cortado_1,
                popuplayertitle: 'Cortado',
                interactive: true,
    title: 'Cortado<br />\
    <img src="styles/legend/Cortado_1_0.png" /> AU<br />\
    <img src="styles/legend/Cortado_1_1.png" /> Ji-o<br />\
    <img src="styles/legend/Cortado_1_2.png" /> Ki-ch/pa<br />\
    <img src="styles/legend/Cortado_1_3.png" /> Ki-chu<br />\
    <img src="styles/legend/Cortado_1_4.png" /> Ki-g<br />\
    <img src="styles/legend/Cortado_1_5.png" /> Ki-in<br />\
    <img src="styles/legend/Cortado_1_6.png" /> Ki-pa<br />\
    <img src="styles/legend/Cortado_1_7.png" /> Ki-tgd<br />\
    <img src="styles/legend/Cortado_1_8.png" /> Ks-ca<br />\
    <img src="styles/legend/Cortado_1_9.png" /> Ks-ce<br />\
    <img src="styles/legend/Cortado_1_10.png" /> Ks-di<br />\
    <img src="styles/legend/Cortado_1_11.png" /> Ks-pu<br />\
    <img src="styles/legend/Cortado_1_12.png" /> Ks-qm<br />\
    <img src="styles/legend/Cortado_1_13.png" /> Ks-to<br />\
    <img src="styles/legend/Cortado_1_14.png" /> Ks-yu<br />\
    <img src="styles/legend/Cortado_1_15.png" /> Lag<br />\
    <img src="styles/legend/Cortado_1_16.png" /> Nm-vp<br />\
    <img src="styles/legend/Cortado_1_17.png" /> Pe-da<br />\
    <img src="styles/legend/Cortado_1_18.png" /> Pe-vll<br />\
    <img src="styles/legend/Cortado_1_19.png" /> Qh-al<br />\
    <img src="styles/legend/Cortado_1_20.png" /> Qp-fa<br />\
    <img src="styles/legend/Cortado_1_21.png" /> Qp-ta<br />\
    <img src="styles/legend/Cortado_1_22.png" /> TrJi-pu<br />' });
var format_CUTERVO_2 = new ol.format.GeoJSON();
var features_CUTERVO_2 = format_CUTERVO_2.readFeatures(json_CUTERVO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CUTERVO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CUTERVO_2.addFeatures(features_CUTERVO_2);
var lyr_CUTERVO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CUTERVO_2, 
                style: style_CUTERVO_2,
                popuplayertitle: 'CUTERVO',
                interactive: true,
                title: '<img src="styles/legend/CUTERVO_2.png" /> CUTERVO'
            });

lyr_EsriTopographic_0.setVisible(true);lyr_Cortado_1.setVisible(true);lyr_CUTERVO_2.setVisible(true);
var layersList = [lyr_EsriTopographic_0,lyr_Cortado_1,lyr_CUTERVO_2];
lyr_Cortado_1.set('fieldAliases', {'Cod_geolog': 'Cod_geolog', 'Des_geolog': 'Des_geolog', 'Era': 'Era', 'Periodo': 'Periodo', 'Epoca': 'Epoca', 'Tipo_roca': 'Tipo_roca', 'Litologia': 'Litologia', 'Unid_hidro': 'Unid_hidro', 'Area_ha': 'Area_ha', });
lyr_CUTERVO_2.set('fieldAliases', {'nombdep': 'nombdep', 'idprov': 'idprov', 'ccpp': 'ccpp', 'ccdd': 'ccdd', 'nombprov': 'nombprov', 'fuente': 'fuente', 'tematica': 'tematica', 'id_geograf': 'id_geograf', });
lyr_Cortado_1.set('fieldImages', {'Cod_geolog': 'TextEdit', 'Des_geolog': 'Hidden', 'Era': 'Hidden', 'Periodo': 'Hidden', 'Epoca': 'Hidden', 'Tipo_roca': 'Hidden', 'Litologia': 'TextEdit', 'Unid_hidro': 'Hidden', 'Area_ha': 'TextEdit', });
lyr_CUTERVO_2.set('fieldImages', {'nombdep': 'TextEdit', 'idprov': 'Hidden', 'ccpp': 'Hidden', 'ccdd': 'Hidden', 'nombprov': 'TextEdit', 'fuente': 'Hidden', 'tematica': 'Hidden', 'id_geograf': 'Hidden', });
lyr_Cortado_1.set('fieldLabels', {'Cod_geolog': 'inline label - always visible', 'Litologia': 'inline label - always visible', 'Area_ha': 'inline label - always visible', });
lyr_CUTERVO_2.set('fieldLabels', {'nombdep': 'inline label - always visible', 'nombprov': 'inline label - always visible', });
lyr_CUTERVO_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});