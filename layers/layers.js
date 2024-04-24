var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIWorldTopo_2 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Boundary_3 = new ol.format.GeoJSON();
var features_Boundary_3 = format_Boundary_3.readFeatures(json_Boundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_3.addFeatures(features_Boundary_3);
var lyr_Boundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundary_3, 
                style: style_Boundary_3,
                popuplayertitle: "Boundary",
                interactive: true,
                title: '<img src="styles/legend/Boundary_3.png" /> Boundary'
            });
var format_Boulders_Displacement_4 = new ol.format.GeoJSON();
var features_Boulders_Displacement_4 = format_Boulders_Displacement_4.readFeatures(json_Boulders_Displacement_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boulders_Displacement_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boulders_Displacement_4.addFeatures(features_Boulders_Displacement_4);
var lyr_Boulders_Displacement_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boulders_Displacement_4, 
                style: style_Boulders_Displacement_4,
                popuplayertitle: "Boulders_Displacement",
                interactive: true,
    title: 'Boulders_Displacement<br />\
    <img src="styles/legend/Boulders_Displacement_4_0.png" /> 2023<br />\
    <img src="styles/legend/Boulders_Displacement_4_1.png" /> 2021<br />\
    <img src="styles/legend/Boulders_Displacement_4_2.png" /> 2018<br />\
    <img src="styles/legend/Boulders_Displacement_4_3.png" /> 2016<br />\
    <img src="styles/legend/Boulders_Displacement_4_4.png" /> 2010<br />\
    <img src="styles/legend/Boulders_Displacement_4_5.png" /> 2009<br />\
    <img src="styles/legend/Boulders_Displacement_4_6.png" /> 2008<br />'
        });
var lyr_ThermalDrop20Oct30Oct2018_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (20Oct-30Oct 2018)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop20Oct30Oct2018_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-670236.091971, 3524991.370608, 4048388.551585, 5777287.554707]
                            })
                        });
var format_VaiaTrackPosition_6 = new ol.format.GeoJSON();
var features_VaiaTrackPosition_6 = format_VaiaTrackPosition_6.readFeatures(json_VaiaTrackPosition_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VaiaTrackPosition_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VaiaTrackPosition_6.addFeatures(features_VaiaTrackPosition_6);
var lyr_VaiaTrackPosition_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VaiaTrackPosition_6, 
                style: style_VaiaTrackPosition_6,
                popuplayertitle: "Vaia Track Position",
                interactive: true,
                title: '<img src="styles/legend/VaiaTrackPosition_6.png" /> Vaia Track Position'
            });
var format_VaiaTrack_7 = new ol.format.GeoJSON();
var features_VaiaTrack_7 = format_VaiaTrack_7.readFeatures(json_VaiaTrack_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VaiaTrack_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VaiaTrack_7.addFeatures(features_VaiaTrack_7);
var lyr_VaiaTrack_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VaiaTrack_7, 
                style: style_VaiaTrack_7,
                popuplayertitle: "Vaia Track",
                interactive: true,
                title: '<img src="styles/legend/VaiaTrack_7.png" /> Vaia Track'
            });
var lyr_ThermalDrop30Jan08Feb2023_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (30Jan-08Feb 2023)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop30Jan08Feb2023_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-670236.091971, 3524991.370608, 4048388.551585, 5777287.554707]
                            })
                        });
var format_HeliosTrackPosition_9 = new ol.format.GeoJSON();
var features_HeliosTrackPosition_9 = format_HeliosTrackPosition_9.readFeatures(json_HeliosTrackPosition_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeliosTrackPosition_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeliosTrackPosition_9.addFeatures(features_HeliosTrackPosition_9);
var lyr_HeliosTrackPosition_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeliosTrackPosition_9, 
                style: style_HeliosTrackPosition_9,
                popuplayertitle: "Helios Track Position",
                interactive: true,
                title: '<img src="styles/legend/HeliosTrackPosition_9.png" /> Helios Track Position'
            });
var format_HeliosTrack_10 = new ol.format.GeoJSON();
var features_HeliosTrack_10 = format_HeliosTrack_10.readFeatures(json_HeliosTrack_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeliosTrack_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeliosTrack_10.addFeatures(features_HeliosTrack_10);
var lyr_HeliosTrack_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeliosTrack_10, 
                style: style_HeliosTrack_10,
                popuplayertitle: "Helios Track",
                interactive: true,
                title: '<img src="styles/legend/HeliosTrack_10.png" /> Helios Track'
            });
var format_HeliosTrackPoint_11 = new ol.format.GeoJSON();
var features_HeliosTrackPoint_11 = format_HeliosTrackPoint_11.readFeatures(json_HeliosTrackPoint_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeliosTrackPoint_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeliosTrackPoint_11.addFeatures(features_HeliosTrackPoint_11);
var lyr_HeliosTrackPoint_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeliosTrackPoint_11, 
                style: style_HeliosTrackPoint_11,
                popuplayertitle: "Helios Track Point",
                interactive: true,
                title: '<img src="styles/legend/HeliosTrackPoint_11.png" /> Helios Track Point'
            });
var format_HeliosFloodline_12 = new ol.format.GeoJSON();
var features_HeliosFloodline_12 = format_HeliosFloodline_12.readFeatures(json_HeliosFloodline_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeliosFloodline_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeliosFloodline_12.addFeatures(features_HeliosFloodline_12);
var lyr_HeliosFloodline_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeliosFloodline_12, 
                style: style_HeliosFloodline_12,
                popuplayertitle: "Helios Floodline",
                interactive: true,
                title: '<img src="styles/legend/HeliosFloodline_12.png" /> Helios Floodline'
            });
var format_HeliosAffectedSites_13 = new ol.format.GeoJSON();
var features_HeliosAffectedSites_13 = format_HeliosAffectedSites_13.readFeatures(json_HeliosAffectedSites_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeliosAffectedSites_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeliosAffectedSites_13.addFeatures(features_HeliosAffectedSites_13);
var lyr_HeliosAffectedSites_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeliosAffectedSites_13, 
                style: style_HeliosAffectedSites_13,
                popuplayertitle: "Helios Affected Sites",
                interactive: true,
                title: '<img src="styles/legend/HeliosAffectedSites_13.png" /> Helios Affected Sites'
            });
var format_GeomorphologicalEvidence_14 = new ol.format.GeoJSON();
var features_GeomorphologicalEvidence_14 = format_GeomorphologicalEvidence_14.readFeatures(json_GeomorphologicalEvidence_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeomorphologicalEvidence_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeomorphologicalEvidence_14.addFeatures(features_GeomorphologicalEvidence_14);
var lyr_GeomorphologicalEvidence_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeomorphologicalEvidence_14, 
                style: style_GeomorphologicalEvidence_14,
                popuplayertitle: "Geomorphological Evidence",
                interactive: true,
    title: 'Geomorphological Evidence<br />\
    <img src="styles/legend/GeomorphologicalEvidence_14_0.png" /> Coastal Flooding<br />\
    <img src="styles/legend/GeomorphologicalEvidence_14_1.png" /> Debris Flow<br />\
    <img src="styles/legend/GeomorphologicalEvidence_14_2.png" /> Land Slide<br />\
    <img src="styles/legend/GeomorphologicalEvidence_14_3.png" /> River Flood<br />\
    <img src="styles/legend/GeomorphologicalEvidence_14_4.png" /> Riverbank Erosion<br />\
    <img src="styles/legend/GeomorphologicalEvidence_14_5.png" /> Rock Slide<br />\
    <img src="styles/legend/GeomorphologicalEvidence_14_6.png" /> Alluvial Flooding<br />'
        });
var lyr_ThermalDrop19Feb28Feb2023_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (19Feb-28Feb 2023)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop19Feb28Feb2023_15.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-670236.091971, 3524991.370608, 4048388.551585, 5777287.554707]
                            })
                        });
var format_JulietteTrackPosition_16 = new ol.format.GeoJSON();
var features_JulietteTrackPosition_16 = format_JulietteTrackPosition_16.readFeatures(json_JulietteTrackPosition_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JulietteTrackPosition_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JulietteTrackPosition_16.addFeatures(features_JulietteTrackPosition_16);
var lyr_JulietteTrackPosition_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JulietteTrackPosition_16, 
                style: style_JulietteTrackPosition_16,
                popuplayertitle: "Juliette Track  Position",
                interactive: true,
                title: '<img src="styles/legend/JulietteTrackPosition_16.png" /> Juliette Track  Position'
            });
var format_JulietteTrack_17 = new ol.format.GeoJSON();
var features_JulietteTrack_17 = format_JulietteTrack_17.readFeatures(json_JulietteTrack_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JulietteTrack_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JulietteTrack_17.addFeatures(features_JulietteTrack_17);
var lyr_JulietteTrack_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JulietteTrack_17, 
                style: style_JulietteTrack_17,
                popuplayertitle: "Juliette Track",
                interactive: true,
                title: '<img src="styles/legend/JulietteTrack_17.png" /> Juliette Track'
            });
var format_GeomorphologicalEvidence_18 = new ol.format.GeoJSON();
var features_GeomorphologicalEvidence_18 = format_GeomorphologicalEvidence_18.readFeatures(json_GeomorphologicalEvidence_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeomorphologicalEvidence_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeomorphologicalEvidence_18.addFeatures(features_GeomorphologicalEvidence_18);
var lyr_GeomorphologicalEvidence_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeomorphologicalEvidence_18, 
                style: style_GeomorphologicalEvidence_18,
                popuplayertitle: "Geomorphological Evidence",
                interactive: true,
    title: 'Geomorphological Evidence<br />\
    <img src="styles/legend/GeomorphologicalEvidence_18_0.png" /> Coastal Flooding<br />\
    <img src="styles/legend/GeomorphologicalEvidence_18_1.png" /> Debris Flow<br />\
    <img src="styles/legend/GeomorphologicalEvidence_18_2.png" /> Land Slide<br />\
    <img src="styles/legend/GeomorphologicalEvidence_18_3.png" /> River Flood<br />\
    <img src="styles/legend/GeomorphologicalEvidence_18_4.png" /> Riverbank Erosion<br />\
    <img src="styles/legend/GeomorphologicalEvidence_18_5.png" /> Rock Slide<br />\
    <img src="styles/legend/GeomorphologicalEvidence_18_6.png" /> Alluvial Flooding<br />'
        });
var lyr_ThermalDrop01Sep10Sep2023_19 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (01Sep-10Sep 2023)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop01Sep10Sep2023_19.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-670236.091971, 3531699.220618, 4039969.862219, 5775342.799269]
                            })
                        });
var format_DanielTrackPosition_20 = new ol.format.GeoJSON();
var features_DanielTrackPosition_20 = format_DanielTrackPosition_20.readFeatures(json_DanielTrackPosition_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DanielTrackPosition_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DanielTrackPosition_20.addFeatures(features_DanielTrackPosition_20);
var lyr_DanielTrackPosition_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DanielTrackPosition_20, 
                style: style_DanielTrackPosition_20,
                popuplayertitle: "Daniel Track Position",
                interactive: true,
                title: '<img src="styles/legend/DanielTrackPosition_20.png" /> Daniel Track Position'
            });
var format_DanielTrack_21 = new ol.format.GeoJSON();
var features_DanielTrack_21 = format_DanielTrack_21.readFeatures(json_DanielTrack_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DanielTrack_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DanielTrack_21.addFeatures(features_DanielTrack_21);
var lyr_DanielTrack_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DanielTrack_21, 
                style: style_DanielTrack_21,
                popuplayertitle: "Daniel Track",
                interactive: true,
                title: '<img src="styles/legend/DanielTrack_21.png" /> Daniel Track'
            });
var format_GeomorphologicalEvidence_22 = new ol.format.GeoJSON();
var features_GeomorphologicalEvidence_22 = format_GeomorphologicalEvidence_22.readFeatures(json_GeomorphologicalEvidence_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeomorphologicalEvidence_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeomorphologicalEvidence_22.addFeatures(features_GeomorphologicalEvidence_22);
var lyr_GeomorphologicalEvidence_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeomorphologicalEvidence_22, 
                style: style_GeomorphologicalEvidence_22,
                popuplayertitle: "Geomorphological Evidence",
                interactive: true,
    title: 'Geomorphological Evidence<br />\
    <img src="styles/legend/GeomorphologicalEvidence_22_0.png" /> Coastal Flooding<br />\
    <img src="styles/legend/GeomorphologicalEvidence_22_1.png" /> Debris Flow<br />\
    <img src="styles/legend/GeomorphologicalEvidence_22_2.png" /> Land Slide<br />\
    <img src="styles/legend/GeomorphologicalEvidence_22_3.png" /> River Flood<br />\
    <img src="styles/legend/GeomorphologicalEvidence_22_4.png" /> Riverbank Erosion<br />\
    <img src="styles/legend/GeomorphologicalEvidence_22_5.png" /> Rock Slide<br />\
    <img src="styles/legend/GeomorphologicalEvidence_22_6.png" /> Alluvial Flooding<br />'
        });
var lyr_ThermalDrop18Sep27Sep1969_23 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (18Sep-27Sep 1969)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop18Sep27Sep1969_23.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-793151.371902, 3233223.270609, 4466694.568080, 5331017.516790]
                            })
                        });
var format_MSLPhPa22091969_24 = new ol.format.GeoJSON();
var features_MSLPhPa22091969_24 = format_MSLPhPa22091969_24.readFeatures(json_MSLPhPa22091969_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSLPhPa22091969_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSLPhPa22091969_24.addFeatures(features_MSLPhPa22091969_24);
var lyr_MSLPhPa22091969_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSLPhPa22091969_24, 
                style: style_MSLPhPa22091969_24,
                popuplayertitle: "MSLP (hPa) (22/09/1969)",
                interactive: true,
                title: '<img src="styles/legend/MSLPhPa22091969_24.png" /> MSLP (hPa) (22/09/1969)'
            });
var format_CaeciliaTrack_25 = new ol.format.GeoJSON();
var features_CaeciliaTrack_25 = format_CaeciliaTrack_25.readFeatures(json_CaeciliaTrack_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaeciliaTrack_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaeciliaTrack_25.addFeatures(features_CaeciliaTrack_25);
var lyr_CaeciliaTrack_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaeciliaTrack_25, 
                style: style_CaeciliaTrack_25,
                popuplayertitle: "Caecilia Track",
                interactive: true,
                title: '<img src="styles/legend/CaeciliaTrack_25.png" /> Caecilia Track'
            });
var lyr_ThermalDrop19Jan28Jan1982_26 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (19Jan-28Jan 1982)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop19Jan28Jan1982_26.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-793151.371902, 3233223.270609, 4466694.568080, 5331017.516790]
                            })
                        });
var format_MSLPhPa24011982_27 = new ol.format.GeoJSON();
var features_MSLPhPa24011982_27 = format_MSLPhPa24011982_27.readFeatures(json_MSLPhPa24011982_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSLPhPa24011982_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSLPhPa24011982_27.addFeatures(features_MSLPhPa24011982_27);
var lyr_MSLPhPa24011982_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSLPhPa24011982_27, 
                style: style_MSLPhPa24011982_27,
                popuplayertitle: "MSLP (hPa) (24/01/1982)",
                interactive: true,
                title: '<img src="styles/legend/MSLPhPa24011982_27.png" /> MSLP (hPa) (24/01/1982)'
            });
var format_LeucosiaTrack_28 = new ol.format.GeoJSON();
var features_LeucosiaTrack_28 = format_LeucosiaTrack_28.readFeatures(json_LeucosiaTrack_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeucosiaTrack_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeucosiaTrack_28.addFeatures(features_LeucosiaTrack_28);
var lyr_LeucosiaTrack_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeucosiaTrack_28, 
                style: style_LeucosiaTrack_28,
                popuplayertitle: "Leucosia Track",
                interactive: true,
                title: '<img src="styles/legend/LeucosiaTrack_28.png" /> Leucosia Track'
            });
var lyr_ThermalDrop23Sep02Oct1983_29 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (23Sep-02Oct 1983)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop23Sep02Oct1983_29.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-793151.371902, 3233223.270609, 4466694.568080, 5331017.516790]
                            })
                        });
var format_MSLPhPa27091983_30 = new ol.format.GeoJSON();
var features_MSLPhPa27091983_30 = format_MSLPhPa27091983_30.readFeatures(json_MSLPhPa27091983_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSLPhPa27091983_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSLPhPa27091983_30.addFeatures(features_MSLPhPa27091983_30);
var lyr_MSLPhPa27091983_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSLPhPa27091983_30, 
                style: style_MSLPhPa27091983_30,
                popuplayertitle: "MSLP (hPa) (27/09/1983)",
                interactive: true,
                title: '<img src="styles/legend/MSLPhPa27091983_30.png" /> MSLP (hPa) (27/09/1983)'
            });
var format_CallistoTrack_31 = new ol.format.GeoJSON();
var features_CallistoTrack_31 = format_CallistoTrack_31.readFeatures(json_CallistoTrack_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CallistoTrack_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CallistoTrack_31.addFeatures(features_CallistoTrack_31);
var lyr_CallistoTrack_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CallistoTrack_31, 
                style: style_CallistoTrack_31,
                popuplayertitle: "Callisto Track",
                interactive: true,
                title: '<img src="styles/legend/CallistoTrack_31.png" /> Callisto Track'
            });
var lyr_ThermalDrop20Oct29Oct1985_32 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (20Oct-29Oct 1985)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop20Oct29Oct1985_32.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-793151.371902, 3233223.270609, 4466694.568080, 5331017.516790]
                            })
                        });
var format_MSLPhPa28101985_33 = new ol.format.GeoJSON();
var features_MSLPhPa28101985_33 = format_MSLPhPa28101985_33.readFeatures(json_MSLPhPa28101985_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSLPhPa28101985_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSLPhPa28101985_33.addFeatures(features_MSLPhPa28101985_33);
var lyr_MSLPhPa28101985_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSLPhPa28101985_33, 
                style: style_MSLPhPa28101985_33,
                popuplayertitle: "MSLP (hPa) (28/10/1985)",
                interactive: true,
                title: '<img src="styles/legend/MSLPhPa28101985_33.png" /> MSLP (hPa) (28/10/1985)'
            });
var format_FranciscaTrack_34 = new ol.format.GeoJSON();
var features_FranciscaTrack_34 = format_FranciscaTrack_34.readFeatures(json_FranciscaTrack_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FranciscaTrack_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FranciscaTrack_34.addFeatures(features_FranciscaTrack_34);
var lyr_FranciscaTrack_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FranciscaTrack_34, 
                style: style_FranciscaTrack_34,
                popuplayertitle: "Francisca Track",
                interactive: true,
                title: '<img src="styles/legend/FranciscaTrack_34.png" /> Francisca Track'
            });
var lyr_ThermalDrop03Sep13Sep1996_35 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (03Sep-13Sep 1996)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop03Sep13Sep1996_35.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-670236.091971, 3524991.370608, 4048388.551585, 5777287.554707]
                            })
                        });
var format_AmadaTrack_36 = new ol.format.GeoJSON();
var features_AmadaTrack_36 = format_AmadaTrack_36.readFeatures(json_AmadaTrack_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AmadaTrack_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmadaTrack_36.addFeatures(features_AmadaTrack_36);
var lyr_AmadaTrack_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AmadaTrack_36, 
                style: style_AmadaTrack_36,
                popuplayertitle: "Amada Track",
                interactive: true,
                title: '<img src="styles/legend/AmadaTrack_36.png" /> Amada Track'
            });
var format_AmadaTrackPosition_37 = new ol.format.GeoJSON();
var features_AmadaTrackPosition_37 = format_AmadaTrackPosition_37.readFeatures(json_AmadaTrackPosition_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AmadaTrackPosition_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmadaTrackPosition_37.addFeatures(features_AmadaTrackPosition_37);
var lyr_AmadaTrackPosition_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AmadaTrackPosition_37, 
                style: style_AmadaTrackPosition_37,
                popuplayertitle: "Amada Track Position",
                interactive: true,
                title: '<img src="styles/legend/AmadaTrackPosition_37.png" /> Amada Track Position'
            });
var lyr_ThermalDrop26Sep06Oct1996_38 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (26Sep-06Oct 1996)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop26Sep06Oct1996_38.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-670236.091971, 3524991.370608, 4048388.551585, 5777287.554707]
                            })
                        });
var lyr_ThermalDrop09Nov19Nov2013_39 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (09Nov-19Nov 2013)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop09Nov19Nov2013_39.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-670236.091971, 3524991.370608, 4048388.551585, 5777287.554707]
                            })
                        });
var format_RuvenTrackPosition_40 = new ol.format.GeoJSON();
var features_RuvenTrackPosition_40 = format_RuvenTrackPosition_40.readFeatures(json_RuvenTrackPosition_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuvenTrackPosition_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuvenTrackPosition_40.addFeatures(features_RuvenTrackPosition_40);
var lyr_RuvenTrackPosition_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuvenTrackPosition_40, 
                style: style_RuvenTrackPosition_40,
                popuplayertitle: "Ruven Track Position",
                interactive: true,
                title: '<img src="styles/legend/RuvenTrackPosition_40.png" /> Ruven Track Position'
            });
var format_RuvenTrack_41 = new ol.format.GeoJSON();
var features_RuvenTrack_41 = format_RuvenTrack_41.readFeatures(json_RuvenTrack_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuvenTrack_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuvenTrack_41.addFeatures(features_RuvenTrack_41);
var lyr_RuvenTrack_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuvenTrack_41, 
                style: style_RuvenTrack_41,
                popuplayertitle: "Ruven Track",
                interactive: true,
                title: '<img src="styles/legend/RuvenTrack_41.png" /> Ruven Track'
            });
var lyr_ThermalDrop09Jan19Jan2014_42 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (09Jan-19Jan 2014)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop09Jan19Jan2014_42.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-670236.091971, 3524991.370608, 4048388.551585, 5777287.554707]
                            })
                        });
var format_IllonaTrackPosition_43 = new ol.format.GeoJSON();
var features_IllonaTrackPosition_43 = format_IllonaTrackPosition_43.readFeatures(json_IllonaTrackPosition_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IllonaTrackPosition_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IllonaTrackPosition_43.addFeatures(features_IllonaTrackPosition_43);
var lyr_IllonaTrackPosition_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IllonaTrackPosition_43, 
                style: style_IllonaTrackPosition_43,
                popuplayertitle: "Illona Track Position",
                interactive: true,
                title: '<img src="styles/legend/IllonaTrackPosition_43.png" /> Illona Track Position'
            });
var format_IllonaTrack_44 = new ol.format.GeoJSON();
var features_IllonaTrack_44 = format_IllonaTrack_44.readFeatures(json_IllonaTrack_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IllonaTrack_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IllonaTrack_44.addFeatures(features_IllonaTrack_44);
var lyr_IllonaTrack_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IllonaTrack_44, 
                style: style_IllonaTrack_44,
                popuplayertitle: "Illona Track",
                interactive: true,
                title: '<img src="styles/legend/IllonaTrack_44.png" /> Illona Track'
            });
var lyr_ThermalDrop22Nov01Dec2014_45 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (22Nov-01Dec 2014)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop22Nov01Dec2014_45.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-670236.091971, 3524991.370608, 4048388.551585, 5777287.554707]
                            })
                        });
var format_MSLPhPa01122014_46 = new ol.format.GeoJSON();
var features_MSLPhPa01122014_46 = format_MSLPhPa01122014_46.readFeatures(json_MSLPhPa01122014_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSLPhPa01122014_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSLPhPa01122014_46.addFeatures(features_MSLPhPa01122014_46);
var lyr_MSLPhPa01122014_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSLPhPa01122014_46, 
                style: style_MSLPhPa01122014_46,
                popuplayertitle: "MSLP (hPa) (01/12/2014)",
                interactive: true,
                title: '<img src="styles/legend/MSLPhPa01122014_46.png" /> MSLP (hPa) (01/12/2014)'
            });
var format_XandraTrackPosition_47 = new ol.format.GeoJSON();
var features_XandraTrackPosition_47 = format_XandraTrackPosition_47.readFeatures(json_XandraTrackPosition_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_XandraTrackPosition_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XandraTrackPosition_47.addFeatures(features_XandraTrackPosition_47);
var lyr_XandraTrackPosition_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_XandraTrackPosition_47, 
                style: style_XandraTrackPosition_47,
                popuplayertitle: "Xandra Track Position",
                interactive: true,
                title: '<img src="styles/legend/XandraTrackPosition_47.png" /> Xandra Track Position'
            });
var format_XandraTrack_48 = new ol.format.GeoJSON();
var features_XandraTrack_48 = format_XandraTrack_48.readFeatures(json_XandraTrack_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_XandraTrack_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XandraTrack_48.addFeatures(features_XandraTrack_48);
var lyr_XandraTrack_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_XandraTrack_48, 
                style: style_XandraTrack_48,
                popuplayertitle: "Xandra Track",
                interactive: true,
                title: '<img src="styles/legend/XandraTrack_48.png" /> Xandra Track'
            });
var lyr_ThermalDrop19Oct28Oct2016_49 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (19Oct-28Oct 2016)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop19Oct28Oct2016_49.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-670236.091971, 3524991.370608, 4048388.551585, 5777287.554707]
                            })
                        });
var format_MSLPhPa28102016_50 = new ol.format.GeoJSON();
var features_MSLPhPa28102016_50 = format_MSLPhPa28102016_50.readFeatures(json_MSLPhPa28102016_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSLPhPa28102016_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSLPhPa28102016_50.addFeatures(features_MSLPhPa28102016_50);
var lyr_MSLPhPa28102016_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSLPhPa28102016_50, 
                style: style_MSLPhPa28102016_50,
                popuplayertitle: "MSLP (hPa) (28/10/2016)",
                interactive: true,
                title: '<img src="styles/legend/MSLPhPa28102016_50.png" /> MSLP (hPa) (28/10/2016)'
            });
var format_TrixieSeismicTrack_51 = new ol.format.GeoJSON();
var features_TrixieSeismicTrack_51 = format_TrixieSeismicTrack_51.readFeatures(json_TrixieSeismicTrack_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrixieSeismicTrack_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrixieSeismicTrack_51.addFeatures(features_TrixieSeismicTrack_51);
var lyr_TrixieSeismicTrack_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrixieSeismicTrack_51, 
                style: style_TrixieSeismicTrack_51,
                popuplayertitle: "Trixie Seismic Track",
                interactive: true,
                title: '<img src="styles/legend/TrixieSeismicTrack_51.png" /> Trixie Seismic Track'
            });
var format_TrixieTrackPosition_52 = new ol.format.GeoJSON();
var features_TrixieTrackPosition_52 = format_TrixieTrackPosition_52.readFeatures(json_TrixieTrackPosition_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrixieTrackPosition_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrixieTrackPosition_52.addFeatures(features_TrixieTrackPosition_52);
var lyr_TrixieTrackPosition_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrixieTrackPosition_52, 
                style: style_TrixieTrackPosition_52,
                popuplayertitle: "Trixie Track Position",
                interactive: true,
                title: '<img src="styles/legend/TrixieTrackPosition_52.png" /> Trixie Track Position'
            });
var format_TrixieTrack_53 = new ol.format.GeoJSON();
var features_TrixieTrack_53 = format_TrixieTrack_53.readFeatures(json_TrixieTrack_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrixieTrack_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrixieTrack_53.addFeatures(features_TrixieTrack_53);
var lyr_TrixieTrack_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrixieTrack_53, 
                style: style_TrixieTrack_53,
                popuplayertitle: "Trixie Track",
                interactive: true,
                title: '<img src="styles/legend/TrixieTrack_53.png" /> Trixie Track'
            });
var lyr_TropicalStormNuma06Nov15Nov2017_54 = new ol.layer.Image({
                            opacity: 1,
                            title: "Tropical Storm Numa (06Nov-15Nov 2017)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TropicalStormNuma06Nov15Nov2017_54.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-670236.091971, 3524991.370608, 4048388.551585, 5777287.554707]
                            })
                        });
var format_MSLPhPa15112017_55 = new ol.format.GeoJSON();
var features_MSLPhPa15112017_55 = format_MSLPhPa15112017_55.readFeatures(json_MSLPhPa15112017_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSLPhPa15112017_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSLPhPa15112017_55.addFeatures(features_MSLPhPa15112017_55);
var lyr_MSLPhPa15112017_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSLPhPa15112017_55, 
                style: style_MSLPhPa15112017_55,
                popuplayertitle: "MSLP (hPa) (15/11/2017)",
                interactive: true,
                title: '<img src="styles/legend/MSLPhPa15112017_55.png" /> MSLP (hPa) (15/11/2017)'
            });
var format_NumaTrackPosition_56 = new ol.format.GeoJSON();
var features_NumaTrackPosition_56 = format_NumaTrackPosition_56.readFeatures(json_NumaTrackPosition_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NumaTrackPosition_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NumaTrackPosition_56.addFeatures(features_NumaTrackPosition_56);
var lyr_NumaTrackPosition_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NumaTrackPosition_56, 
                style: style_NumaTrackPosition_56,
                popuplayertitle: "Numa Track Position",
                interactive: true,
                title: '<img src="styles/legend/NumaTrackPosition_56.png" /> Numa Track Position'
            });
var format_NumaTrack_57 = new ol.format.GeoJSON();
var features_NumaTrack_57 = format_NumaTrack_57.readFeatures(json_NumaTrack_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NumaTrack_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NumaTrack_57.addFeatures(features_NumaTrack_57);
var lyr_NumaTrack_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NumaTrack_57, 
                style: style_NumaTrack_57,
                popuplayertitle: "Numa Track",
                interactive: true,
                title: '<img src="styles/legend/NumaTrack_57.png" /> Numa Track'
            });
var lyr_ThermalDrop05Jan14Jan1995_58 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (05Jan-14Jan 1995)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop05Jan14Jan1995_58.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-670236.091971, 3524991.370608, 4048388.551585, 5777287.554707]
                            })
                        });
var format_MSLPhPa14011995_59 = new ol.format.GeoJSON();
var features_MSLPhPa14011995_59 = format_MSLPhPa14011995_59.readFeatures(json_MSLPhPa14011995_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSLPhPa14011995_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSLPhPa14011995_59.addFeatures(features_MSLPhPa14011995_59);
var lyr_MSLPhPa14011995_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSLPhPa14011995_59, 
                style: style_MSLPhPa14011995_59,
                popuplayertitle: "MSLP (hPa) (14/01/1995)",
                interactive: true,
                title: '<img src="styles/legend/MSLPhPa14011995_59.png" /> MSLP (hPa) (14/01/1995)'
            });
var format_CelenoTrackPosition_60 = new ol.format.GeoJSON();
var features_CelenoTrackPosition_60 = format_CelenoTrackPosition_60.readFeatures(json_CelenoTrackPosition_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CelenoTrackPosition_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CelenoTrackPosition_60.addFeatures(features_CelenoTrackPosition_60);
var lyr_CelenoTrackPosition_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CelenoTrackPosition_60, 
                style: style_CelenoTrackPosition_60,
                popuplayertitle: "Celeno Track Position",
                interactive: true,
                title: '<img src="styles/legend/CelenoTrackPosition_60.png" /> Celeno Track Position'
            });
var format_CelenoTrack_61 = new ol.format.GeoJSON();
var features_CelenoTrack_61 = format_CelenoTrack_61.readFeatures(json_CelenoTrack_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CelenoTrack_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CelenoTrack_61.addFeatures(features_CelenoTrack_61);
var lyr_CelenoTrack_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CelenoTrack_61, 
                style: style_CelenoTrack_61,
                popuplayertitle: "Celeno Track",
                interactive: true,
                title: '<img src="styles/legend/CelenoTrack_61.png" /> Celeno Track'
            });
var lyr_ThermalDrop27Sep06Oct1996_62 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (27Sep-06Oct 1996)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop27Sep06Oct1996_62.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-670236.091971, 3524991.370608, 4048388.551585, 5777287.554707]
                            })
                        });
var format_MSLPhPa04101996_63 = new ol.format.GeoJSON();
var features_MSLPhPa04101996_63 = format_MSLPhPa04101996_63.readFeatures(json_MSLPhPa04101996_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSLPhPa04101996_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSLPhPa04101996_63.addFeatures(features_MSLPhPa04101996_63);
var lyr_MSLPhPa04101996_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSLPhPa04101996_63, 
                style: style_MSLPhPa04101996_63,
                popuplayertitle: "MSLP (hPa) (04/10/1996)",
                interactive: true,
                title: '<img src="styles/legend/MSLPhPa04101996_63.png" /> MSLP (hPa) (04/10/1996)'
            });
var format_CorneliaTrackPosition_64 = new ol.format.GeoJSON();
var features_CorneliaTrackPosition_64 = format_CorneliaTrackPosition_64.readFeatures(json_CorneliaTrackPosition_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorneliaTrackPosition_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorneliaTrackPosition_64.addFeatures(features_CorneliaTrackPosition_64);
var lyr_CorneliaTrackPosition_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorneliaTrackPosition_64, 
                style: style_CorneliaTrackPosition_64,
                popuplayertitle: "CorneliaTrack Position",
                interactive: true,
                title: '<img src="styles/legend/CorneliaTrackPosition_64.png" /> CorneliaTrack Position'
            });
var format_CorneliaTrack1996_65 = new ol.format.GeoJSON();
var features_CorneliaTrack1996_65 = format_CorneliaTrack1996_65.readFeatures(json_CorneliaTrack1996_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorneliaTrack1996_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorneliaTrack1996_65.addFeatures(features_CorneliaTrack1996_65);
var lyr_CorneliaTrack1996_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorneliaTrack1996_65, 
                style: style_CorneliaTrack1996_65,
                popuplayertitle: "Cornelia Track (1996)",
                interactive: true,
                title: '<img src="styles/legend/CorneliaTrack1996_65.png" /> Cornelia Track (1996)'
            });
var lyr_ThermalDrop03Dec12Dec2005_66 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (03Dec-12Dec 2005)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop03Dec12Dec2005_66.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-670236.091971, 3524991.370608, 4048388.551585, 5777287.554707]
                            })
                        });
var format_MSLPhPa13122005_67 = new ol.format.GeoJSON();
var features_MSLPhPa13122005_67 = format_MSLPhPa13122005_67.readFeatures(json_MSLPhPa13122005_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSLPhPa13122005_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSLPhPa13122005_67.addFeatures(features_MSLPhPa13122005_67);
var lyr_MSLPhPa13122005_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSLPhPa13122005_67, 
                style: style_MSLPhPa13122005_67,
                popuplayertitle: "MSLP (hPa) (13/12/2005)",
                interactive: true,
                title: '<img src="styles/legend/MSLPhPa13122005_67.png" /> MSLP (hPa) (13/12/2005)'
            });
var format_ZeoTrackPosition_68 = new ol.format.GeoJSON();
var features_ZeoTrackPosition_68 = format_ZeoTrackPosition_68.readFeatures(json_ZeoTrackPosition_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZeoTrackPosition_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZeoTrackPosition_68.addFeatures(features_ZeoTrackPosition_68);
var lyr_ZeoTrackPosition_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZeoTrackPosition_68, 
                style: style_ZeoTrackPosition_68,
                popuplayertitle: "Zeo Track Position",
                interactive: true,
                title: '<img src="styles/legend/ZeoTrackPosition_68.png" /> Zeo Track Position'
            });
var format_ZeoTrack_69 = new ol.format.GeoJSON();
var features_ZeoTrack_69 = format_ZeoTrack_69.readFeatures(json_ZeoTrack_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZeoTrack_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZeoTrack_69.addFeatures(features_ZeoTrack_69);
var lyr_ZeoTrack_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZeoTrack_69, 
                style: style_ZeoTrack_69,
                popuplayertitle: "Zeo Track",
                interactive: true,
                title: '<img src="styles/legend/ZeoTrack_69.png" /> Zeo Track'
            });
var lyr_ThermalDrop28Oct06Nov2011_70 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (28Oct-06Nov 2011)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop28Oct06Nov2011_70.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-670236.091971, 3524991.370608, 4048388.551585, 5777287.554707]
                            })
                        });
var format_MSLPhPa06112011_71 = new ol.format.GeoJSON();
var features_MSLPhPa06112011_71 = format_MSLPhPa06112011_71.readFeatures(json_MSLPhPa06112011_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSLPhPa06112011_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSLPhPa06112011_71.addFeatures(features_MSLPhPa06112011_71);
var lyr_MSLPhPa06112011_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSLPhPa06112011_71, 
                style: style_MSLPhPa06112011_71,
                popuplayertitle: "MSLP (hPa) (06/11/2011)",
                interactive: true,
                title: '<img src="styles/legend/MSLPhPa06112011_71.png" /> MSLP (hPa) (06/11/2011)'
            });
var format_RolphSeismicTrack_72 = new ol.format.GeoJSON();
var features_RolphSeismicTrack_72 = format_RolphSeismicTrack_72.readFeatures(json_RolphSeismicTrack_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RolphSeismicTrack_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RolphSeismicTrack_72.addFeatures(features_RolphSeismicTrack_72);
var lyr_RolphSeismicTrack_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RolphSeismicTrack_72, 
                style: style_RolphSeismicTrack_72,
                popuplayertitle: "Rolph Seismic Track",
                interactive: true,
                title: '<img src="styles/legend/RolphSeismicTrack_72.png" /> Rolph Seismic Track'
            });
var format_RolphTrackPosition_73 = new ol.format.GeoJSON();
var features_RolphTrackPosition_73 = format_RolphTrackPosition_73.readFeatures(json_RolphTrackPosition_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RolphTrackPosition_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RolphTrackPosition_73.addFeatures(features_RolphTrackPosition_73);
var lyr_RolphTrackPosition_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RolphTrackPosition_73, 
                style: style_RolphTrackPosition_73,
                popuplayertitle: "Rolph Track Position",
                interactive: true,
                title: '<img src="styles/legend/RolphTrackPosition_73.png" /> Rolph Track Position'
            });
var format_RolphTrack_74 = new ol.format.GeoJSON();
var features_RolphTrack_74 = format_RolphTrack_74.readFeatures(json_RolphTrack_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RolphTrack_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RolphTrack_74.addFeatures(features_RolphTrack_74);
var lyr_RolphTrack_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RolphTrack_74, 
                style: style_RolphTrack_74,
                popuplayertitle: "Rolph Track ",
                interactive: true,
                title: '<img src="styles/legend/RolphTrack_74.png" /> Rolph Track '
            });
var lyr_ThermalDrop29Oct07Nov2014_75 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (29Oct-07Nov 2014)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop29Oct07Nov2014_75.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-670236.091971, 3524991.370608, 4048388.551585, 5777287.554707]
                            })
                        });
var format_MSLPhPa07112014_76 = new ol.format.GeoJSON();
var features_MSLPhPa07112014_76 = format_MSLPhPa07112014_76.readFeatures(json_MSLPhPa07112014_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSLPhPa07112014_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSLPhPa07112014_76.addFeatures(features_MSLPhPa07112014_76);
var lyr_MSLPhPa07112014_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSLPhPa07112014_76, 
                style: style_MSLPhPa07112014_76,
                popuplayertitle: "MSLP (hPa) (07/11/2014)",
                interactive: true,
                title: '<img src="styles/legend/MSLPhPa07112014_76.png" /> MSLP (hPa) (07/11/2014)'
            });
var format_QendresaSeismicTrack_77 = new ol.format.GeoJSON();
var features_QendresaSeismicTrack_77 = format_QendresaSeismicTrack_77.readFeatures(json_QendresaSeismicTrack_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QendresaSeismicTrack_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QendresaSeismicTrack_77.addFeatures(features_QendresaSeismicTrack_77);
var lyr_QendresaSeismicTrack_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QendresaSeismicTrack_77, 
                style: style_QendresaSeismicTrack_77,
                popuplayertitle: "Qendresa Seismic Track",
                interactive: true,
                title: '<img src="styles/legend/QendresaSeismicTrack_77.png" /> Qendresa Seismic Track'
            });
var format_QendresaTrackPosition_78 = new ol.format.GeoJSON();
var features_QendresaTrackPosition_78 = format_QendresaTrackPosition_78.readFeatures(json_QendresaTrackPosition_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QendresaTrackPosition_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QendresaTrackPosition_78.addFeatures(features_QendresaTrackPosition_78);
var lyr_QendresaTrackPosition_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QendresaTrackPosition_78, 
                style: style_QendresaTrackPosition_78,
                popuplayertitle: "Qendresa Track Position",
                interactive: true,
                title: '<img src="styles/legend/QendresaTrackPosition_78.png" /> Qendresa Track Position'
            });
var format_QendresaTrack2014_79 = new ol.format.GeoJSON();
var features_QendresaTrack2014_79 = format_QendresaTrack2014_79.readFeatures(json_QendresaTrack2014_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QendresaTrack2014_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QendresaTrack2014_79.addFeatures(features_QendresaTrack2014_79);
var lyr_QendresaTrack2014_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QendresaTrack2014_79, 
                style: style_QendresaTrack2014_79,
                popuplayertitle: "Qendresa Track (2014)",
                interactive: true,
                title: '<img src="styles/legend/QendresaTrack2014_79.png" /> Qendresa Track (2014)'
            });
var format_QendresaTrackPoint_80 = new ol.format.GeoJSON();
var features_QendresaTrackPoint_80 = format_QendresaTrackPoint_80.readFeatures(json_QendresaTrackPoint_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QendresaTrackPoint_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QendresaTrackPoint_80.addFeatures(features_QendresaTrackPoint_80);
var lyr_QendresaTrackPoint_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QendresaTrackPoint_80, 
                style: style_QendresaTrackPoint_80,
                popuplayertitle: "QendresaTrack Point",
                interactive: true,
                title: '<img src="styles/legend/QendresaTrackPoint_80.png" /> QendresaTrack Point'
            });
var format_QendresaFloodline_81 = new ol.format.GeoJSON();
var features_QendresaFloodline_81 = format_QendresaFloodline_81.readFeatures(json_QendresaFloodline_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QendresaFloodline_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QendresaFloodline_81.addFeatures(features_QendresaFloodline_81);
var lyr_QendresaFloodline_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QendresaFloodline_81, 
                style: style_QendresaFloodline_81,
                popuplayertitle: "Qendresa Floodline",
                interactive: true,
                title: '<img src="styles/legend/QendresaFloodline_81.png" /> Qendresa Floodline'
            });
var lyr_ThermalDrop18Sep27Sep2018_82 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (18Sep-27Sep 2018)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop18Sep27Sep2018_82.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-670235.729753, 3524991.758869, 4042289.009431, 5780349.220256]
                            })
                        });
var format_MSLPhPa27092018_83 = new ol.format.GeoJSON();
var features_MSLPhPa27092018_83 = format_MSLPhPa27092018_83.readFeatures(json_MSLPhPa27092018_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSLPhPa27092018_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSLPhPa27092018_83.addFeatures(features_MSLPhPa27092018_83);
var lyr_MSLPhPa27092018_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSLPhPa27092018_83, 
                style: style_MSLPhPa27092018_83,
                popuplayertitle: "MSLP (hPa) (27/09/2018)",
                interactive: true,
                title: '<img src="styles/legend/MSLPhPa27092018_83.png" /> MSLP (hPa) (27/09/2018)'
            });
var format_ZorbasSeismicTrack_84 = new ol.format.GeoJSON();
var features_ZorbasSeismicTrack_84 = format_ZorbasSeismicTrack_84.readFeatures(json_ZorbasSeismicTrack_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZorbasSeismicTrack_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZorbasSeismicTrack_84.addFeatures(features_ZorbasSeismicTrack_84);
var lyr_ZorbasSeismicTrack_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZorbasSeismicTrack_84, 
                style: style_ZorbasSeismicTrack_84,
                popuplayertitle: "Zorbas Seismic Track",
                interactive: true,
                title: '<img src="styles/legend/ZorbasSeismicTrack_84.png" /> Zorbas Seismic Track'
            });
var format_ZorbasTrackPosition_85 = new ol.format.GeoJSON();
var features_ZorbasTrackPosition_85 = format_ZorbasTrackPosition_85.readFeatures(json_ZorbasTrackPosition_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZorbasTrackPosition_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZorbasTrackPosition_85.addFeatures(features_ZorbasTrackPosition_85);
var lyr_ZorbasTrackPosition_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZorbasTrackPosition_85, 
                style: style_ZorbasTrackPosition_85,
                popuplayertitle: "Zorbas Track Position",
                interactive: true,
                title: '<img src="styles/legend/ZorbasTrackPosition_85.png" /> Zorbas Track Position'
            });
var format_ZorbasTrack_86 = new ol.format.GeoJSON();
var features_ZorbasTrack_86 = format_ZorbasTrack_86.readFeatures(json_ZorbasTrack_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZorbasTrack_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZorbasTrack_86.addFeatures(features_ZorbasTrack_86);
var lyr_ZorbasTrack_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZorbasTrack_86, 
                style: style_ZorbasTrack_86,
                popuplayertitle: "Zorbas Track ",
                interactive: true,
                title: '<img src="styles/legend/ZorbasTrack_86.png" /> Zorbas Track '
            });
var format_ZorbasTrackPoints_87 = new ol.format.GeoJSON();
var features_ZorbasTrackPoints_87 = format_ZorbasTrackPoints_87.readFeatures(json_ZorbasTrackPoints_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZorbasTrackPoints_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZorbasTrackPoints_87.addFeatures(features_ZorbasTrackPoints_87);
var lyr_ZorbasTrackPoints_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZorbasTrackPoints_87, 
                style: style_ZorbasTrackPoints_87,
                popuplayertitle: "Zorbas Track Points",
                interactive: true,
                title: '<img src="styles/legend/ZorbasTrackPoints_87.png" /> Zorbas Track Points'
            });
var format_ZorbasFloodline_88 = new ol.format.GeoJSON();
var features_ZorbasFloodline_88 = format_ZorbasFloodline_88.readFeatures(json_ZorbasFloodline_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZorbasFloodline_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZorbasFloodline_88.addFeatures(features_ZorbasFloodline_88);
var lyr_ZorbasFloodline_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZorbasFloodline_88, 
                style: style_ZorbasFloodline_88,
                popuplayertitle: "Zorbas Floodline",
                interactive: true,
                title: '<img src="styles/legend/ZorbasFloodline_88.png" /> Zorbas Floodline'
            });
var format_ZorbasAffectedSites_89 = new ol.format.GeoJSON();
var features_ZorbasAffectedSites_89 = format_ZorbasAffectedSites_89.readFeatures(json_ZorbasAffectedSites_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZorbasAffectedSites_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZorbasAffectedSites_89.addFeatures(features_ZorbasAffectedSites_89);
var lyr_ZorbasAffectedSites_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZorbasAffectedSites_89, 
                style: style_ZorbasAffectedSites_89,
                popuplayertitle: "Zorbas Affected Sites",
                interactive: true,
                title: '<img src="styles/legend/ZorbasAffectedSites_89.png" /> Zorbas Affected Sites'
            });
var format_GeomorphologicalEvidence_90 = new ol.format.GeoJSON();
var features_GeomorphologicalEvidence_90 = format_GeomorphologicalEvidence_90.readFeatures(json_GeomorphologicalEvidence_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeomorphologicalEvidence_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeomorphologicalEvidence_90.addFeatures(features_GeomorphologicalEvidence_90);
var lyr_GeomorphologicalEvidence_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeomorphologicalEvidence_90, 
                style: style_GeomorphologicalEvidence_90,
                popuplayertitle: "Geomorphological Evidence",
                interactive: true,
    title: 'Geomorphological Evidence<br />\
    <img src="styles/legend/GeomorphologicalEvidence_90_0.png" /> Coastal Flooding<br />\
    <img src="styles/legend/GeomorphologicalEvidence_90_1.png" /> Debris Flow<br />\
    <img src="styles/legend/GeomorphologicalEvidence_90_2.png" /> Land Slide<br />\
    <img src="styles/legend/GeomorphologicalEvidence_90_3.png" /> River Flood<br />\
    <img src="styles/legend/GeomorphologicalEvidence_90_4.png" /> Riverbank Erosion<br />\
    <img src="styles/legend/GeomorphologicalEvidence_90_5.png" /> Rock Slide<br />\
    <img src="styles/legend/GeomorphologicalEvidence_90_6.png" /> Alluvial Flooding<br />'
        });
var lyr_ThermalDrop02Nov11Nov2019_91 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (02Nov-11Nov 2019)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop02Nov11Nov2019_91.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-670236.091971, 3524991.370608, 4048388.551585, 5777287.554707]
                            })
                        });
var format_MSLPhPa11112019_92 = new ol.format.GeoJSON();
var features_MSLPhPa11112019_92 = format_MSLPhPa11112019_92.readFeatures(json_MSLPhPa11112019_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSLPhPa11112019_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSLPhPa11112019_92.addFeatures(features_MSLPhPa11112019_92);
var lyr_MSLPhPa11112019_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSLPhPa11112019_92, 
                style: style_MSLPhPa11112019_92,
                popuplayertitle: "MSLP (hPa) (11/11/2019)",
                interactive: true,
                title: '<img src="styles/legend/MSLPhPa11112019_92.png" /> MSLP (hPa) (11/11/2019)'
            });
var format_TrudyTrackPosition_93 = new ol.format.GeoJSON();
var features_TrudyTrackPosition_93 = format_TrudyTrackPosition_93.readFeatures(json_TrudyTrackPosition_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrudyTrackPosition_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrudyTrackPosition_93.addFeatures(features_TrudyTrackPosition_93);
var lyr_TrudyTrackPosition_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrudyTrackPosition_93, 
                style: style_TrudyTrackPosition_93,
                popuplayertitle: "Trudy Track Position",
                interactive: true,
                title: '<img src="styles/legend/TrudyTrackPosition_93.png" /> Trudy Track Position'
            });
var format_TrudyTrack_94 = new ol.format.GeoJSON();
var features_TrudyTrack_94 = format_TrudyTrack_94.readFeatures(json_TrudyTrack_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrudyTrack_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrudyTrack_94.addFeatures(features_TrudyTrack_94);
var lyr_TrudyTrack_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrudyTrack_94, 
                style: style_TrudyTrack_94,
                popuplayertitle: "Trudy Track ",
                interactive: true,
                title: '<img src="styles/legend/TrudyTrack_94.png" /> Trudy Track '
            });
var lyr_ThermalDrop06Sep15Sep2020_95 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (06Sep-15Sep 2020)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop06Sep15Sep2020_95.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-670236.091971, 3524991.370608, 4048388.551585, 5777287.554707]
                            })
                        });
var format_MSLPhPa15092020_96 = new ol.format.GeoJSON();
var features_MSLPhPa15092020_96 = format_MSLPhPa15092020_96.readFeatures(json_MSLPhPa15092020_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSLPhPa15092020_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSLPhPa15092020_96.addFeatures(features_MSLPhPa15092020_96);
var lyr_MSLPhPa15092020_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSLPhPa15092020_96, 
                style: style_MSLPhPa15092020_96,
                popuplayertitle: "MSLP (hPa) (15/09/2020)",
                interactive: true,
                title: '<img src="styles/legend/MSLPhPa15092020_96.png" /> MSLP (hPa) (15/09/2020)'
            });
var format_IanosSeismicTrack_97 = new ol.format.GeoJSON();
var features_IanosSeismicTrack_97 = format_IanosSeismicTrack_97.readFeatures(json_IanosSeismicTrack_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IanosSeismicTrack_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IanosSeismicTrack_97.addFeatures(features_IanosSeismicTrack_97);
var lyr_IanosSeismicTrack_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IanosSeismicTrack_97, 
                style: style_IanosSeismicTrack_97,
                popuplayertitle: "Ianos Seismic Track",
                interactive: true,
                title: '<img src="styles/legend/IanosSeismicTrack_97.png" /> Ianos Seismic Track'
            });
var format_IanosTrackPosition_98 = new ol.format.GeoJSON();
var features_IanosTrackPosition_98 = format_IanosTrackPosition_98.readFeatures(json_IanosTrackPosition_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IanosTrackPosition_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IanosTrackPosition_98.addFeatures(features_IanosTrackPosition_98);
var lyr_IanosTrackPosition_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IanosTrackPosition_98, 
                style: style_IanosTrackPosition_98,
                popuplayertitle: "Ianos Track Position",
                interactive: true,
                title: '<img src="styles/legend/IanosTrackPosition_98.png" /> Ianos Track Position'
            });
var format_IanosTrack_99 = new ol.format.GeoJSON();
var features_IanosTrack_99 = format_IanosTrack_99.readFeatures(json_IanosTrack_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IanosTrack_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IanosTrack_99.addFeatures(features_IanosTrack_99);
var lyr_IanosTrack_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IanosTrack_99, 
                style: style_IanosTrack_99,
                popuplayertitle: "Ianos Track",
                interactive: true,
                title: '<img src="styles/legend/IanosTrack_99.png" /> Ianos Track'
            });
var format_IanosTrackPoints_100 = new ol.format.GeoJSON();
var features_IanosTrackPoints_100 = format_IanosTrackPoints_100.readFeatures(json_IanosTrackPoints_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IanosTrackPoints_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IanosTrackPoints_100.addFeatures(features_IanosTrackPoints_100);
var lyr_IanosTrackPoints_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IanosTrackPoints_100, 
                style: style_IanosTrackPoints_100,
                popuplayertitle: "Ianos Track Points",
                interactive: true,
                title: '<img src="styles/legend/IanosTrackPoints_100.png" /> Ianos Track Points'
            });
var format_GeomorphologicalEvidence_101 = new ol.format.GeoJSON();
var features_GeomorphologicalEvidence_101 = format_GeomorphologicalEvidence_101.readFeatures(json_GeomorphologicalEvidence_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeomorphologicalEvidence_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeomorphologicalEvidence_101.addFeatures(features_GeomorphologicalEvidence_101);
var lyr_GeomorphologicalEvidence_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeomorphologicalEvidence_101, 
                style: style_GeomorphologicalEvidence_101,
                popuplayertitle: "Geomorphological Evidence",
                interactive: true,
    title: 'Geomorphological Evidence<br />\
    <img src="styles/legend/GeomorphologicalEvidence_101_0.png" /> Coastal Flooding<br />\
    <img src="styles/legend/GeomorphologicalEvidence_101_1.png" /> Debris Flow<br />\
    <img src="styles/legend/GeomorphologicalEvidence_101_2.png" /> Land Slide<br />\
    <img src="styles/legend/GeomorphologicalEvidence_101_3.png" /> River Flood<br />\
    <img src="styles/legend/GeomorphologicalEvidence_101_4.png" /> Riverbank Erosion<br />\
    <img src="styles/legend/GeomorphologicalEvidence_101_5.png" /> Rock Slide<br />\
    <img src="styles/legend/GeomorphologicalEvidence_101_6.png" /> Alluvial Flooding<br />'
        });
var lyr_ThermalDrop16Oct25Oct2021_102 = new ol.layer.Image({
                            opacity: 1,
                            title: "Thermal Drop (16Oct-25Oct 2021)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ThermalDrop16Oct25Oct2021_102.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-670236.091986, 3524991.370665, 4048388.551537, 5777287.554751]
                            })
                        });
var format_MSLPhPa25102021_103 = new ol.format.GeoJSON();
var features_MSLPhPa25102021_103 = format_MSLPhPa25102021_103.readFeatures(json_MSLPhPa25102021_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSLPhPa25102021_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSLPhPa25102021_103.addFeatures(features_MSLPhPa25102021_103);
var lyr_MSLPhPa25102021_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSLPhPa25102021_103, 
                style: style_MSLPhPa25102021_103,
                popuplayertitle: "MSLP (hPa) (25/10/2021)",
                interactive: true,
                title: '<img src="styles/legend/MSLPhPa25102021_103.png" /> MSLP (hPa) (25/10/2021)'
            });
var format_ApolloSeismicTrack_104 = new ol.format.GeoJSON();
var features_ApolloSeismicTrack_104 = format_ApolloSeismicTrack_104.readFeatures(json_ApolloSeismicTrack_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApolloSeismicTrack_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApolloSeismicTrack_104.addFeatures(features_ApolloSeismicTrack_104);
var lyr_ApolloSeismicTrack_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApolloSeismicTrack_104, 
                style: style_ApolloSeismicTrack_104,
                popuplayertitle: "Apollo Seismic Track",
                interactive: true,
                title: '<img src="styles/legend/ApolloSeismicTrack_104.png" /> Apollo Seismic Track'
            });
var format_ApolloTrackPostion_105 = new ol.format.GeoJSON();
var features_ApolloTrackPostion_105 = format_ApolloTrackPostion_105.readFeatures(json_ApolloTrackPostion_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApolloTrackPostion_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApolloTrackPostion_105.addFeatures(features_ApolloTrackPostion_105);
var lyr_ApolloTrackPostion_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApolloTrackPostion_105, 
                style: style_ApolloTrackPostion_105,
                popuplayertitle: "Apollo Track Postion",
                interactive: true,
                title: '<img src="styles/legend/ApolloTrackPostion_105.png" /> Apollo Track Postion'
            });
var format_ApolloTrack_106 = new ol.format.GeoJSON();
var features_ApolloTrack_106 = format_ApolloTrack_106.readFeatures(json_ApolloTrack_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApolloTrack_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApolloTrack_106.addFeatures(features_ApolloTrack_106);
var lyr_ApolloTrack_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApolloTrack_106, 
                style: style_ApolloTrack_106,
                popuplayertitle: "Apollo Track",
                interactive: true,
                title: '<img src="styles/legend/ApolloTrack_106.png" /> Apollo Track'
            });
var format_GeomorphologicalEvidence_107 = new ol.format.GeoJSON();
var features_GeomorphologicalEvidence_107 = format_GeomorphologicalEvidence_107.readFeatures(json_GeomorphologicalEvidence_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeomorphologicalEvidence_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeomorphologicalEvidence_107.addFeatures(features_GeomorphologicalEvidence_107);
var lyr_GeomorphologicalEvidence_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeomorphologicalEvidence_107, 
                style: style_GeomorphologicalEvidence_107,
                popuplayertitle: "Geomorphological Evidence",
                interactive: true,
    title: 'Geomorphological Evidence<br />\
    <img src="styles/legend/GeomorphologicalEvidence_107_0.png" /> Coastal Flooding<br />\
    <img src="styles/legend/GeomorphologicalEvidence_107_1.png" /> Debris Flow<br />\
    <img src="styles/legend/GeomorphologicalEvidence_107_2.png" /> Land Slide<br />\
    <img src="styles/legend/GeomorphologicalEvidence_107_3.png" /> River Flood<br />\
    <img src="styles/legend/GeomorphologicalEvidence_107_4.png" /> Riverbank Erosion<br />\
    <img src="styles/legend/GeomorphologicalEvidence_107_5.png" /> Rock Slide<br />\
    <img src="styles/legend/GeomorphologicalEvidence_107_6.png" /> Alluvial Flooding<br />'
        });
var group_Apollo2021 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop16Oct25Oct2021_102,lyr_MSLPhPa25102021_103,lyr_ApolloSeismicTrack_104,lyr_ApolloTrackPostion_105,lyr_ApolloTrack_106,lyr_GeomorphologicalEvidence_107,],
                                fold: "close",
                                title: "Apollo (2021)"});
var group_Ianos2020 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop06Sep15Sep2020_95,lyr_MSLPhPa15092020_96,lyr_IanosSeismicTrack_97,lyr_IanosTrackPosition_98,lyr_IanosTrack_99,lyr_IanosTrackPoints_100,lyr_GeomorphologicalEvidence_101,],
                                fold: "close",
                                title: "Ianos (2020)"});
var group_Trudy2019 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop02Nov11Nov2019_91,lyr_MSLPhPa11112019_92,lyr_TrudyTrackPosition_93,lyr_TrudyTrack_94,],
                                fold: "close",
                                title: "Trudy (2019)"});
var group_Zorbas2018 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop18Sep27Sep2018_82,lyr_MSLPhPa27092018_83,lyr_ZorbasSeismicTrack_84,lyr_ZorbasTrackPosition_85,lyr_ZorbasTrack_86,lyr_ZorbasTrackPoints_87,lyr_ZorbasFloodline_88,lyr_ZorbasAffectedSites_89,lyr_GeomorphologicalEvidence_90,],
                                fold: "close",
                                title: "Zorbas (2018)"});
var group_Qendresa2014 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop29Oct07Nov2014_75,lyr_MSLPhPa07112014_76,lyr_QendresaSeismicTrack_77,lyr_QendresaTrackPosition_78,lyr_QendresaTrack2014_79,lyr_QendresaTrackPoint_80,lyr_QendresaFloodline_81,],
                                fold: "close",
                                title: "Qendresa (2014)"});
var group_Rolph2011 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop28Oct06Nov2011_70,lyr_MSLPhPa06112011_71,lyr_RolphSeismicTrack_72,lyr_RolphTrackPosition_73,lyr_RolphTrack_74,],
                                fold: "close",
                                title: "Rolph (2011)"});
var group_Zeo2005 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop03Dec12Dec2005_66,lyr_MSLPhPa13122005_67,lyr_ZeoTrackPosition_68,lyr_ZeoTrack_69,],
                                fold: "close",
                                title: "Zeo (2005)"});
var group_Cornelia1996 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop27Sep06Oct1996_62,lyr_MSLPhPa04101996_63,lyr_CorneliaTrackPosition_64,lyr_CorneliaTrack1996_65,],
                                fold: "close",
                                title: "Cornelia (1996)"});
var group_Celeno1995 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop05Jan14Jan1995_58,lyr_MSLPhPa14011995_59,lyr_CelenoTrackPosition_60,lyr_CelenoTrack_61,],
                                fold: "close",
                                title: "Celeno (1995) "});
var group_Numa2017 = new ol.layer.Group({
                                layers: [lyr_TropicalStormNuma06Nov15Nov2017_54,lyr_MSLPhPa15112017_55,lyr_NumaTrackPosition_56,lyr_NumaTrack_57,],
                                fold: "close",
                                title: "Numa (2017)"});
var group_Trixie2016 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop19Oct28Oct2016_49,lyr_MSLPhPa28102016_50,lyr_TrixieSeismicTrack_51,lyr_TrixieTrackPosition_52,lyr_TrixieTrack_53,],
                                fold: "close",
                                title: "Trixie (2016)"});
var group_Xandra2014 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop22Nov01Dec2014_45,lyr_MSLPhPa01122014_46,lyr_XandraTrackPosition_47,lyr_XandraTrack_48,],
                                fold: "close",
                                title: "Xandra (2014)"});
var group_Illona2014 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop09Jan19Jan2014_42,lyr_IllonaTrackPosition_43,lyr_IllonaTrack_44,],
                                fold: "close",
                                title: "Illona (2014)"});
var group_Ruven2013 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop09Nov19Nov2013_39,lyr_RuvenTrackPosition_40,lyr_RuvenTrack_41,],
                                fold: "close",
                                title: "Ruven (2013)"});
var group_Samir1996 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop26Sep06Oct1996_38,],
                                fold: "close",
                                title: "Samir (1996)"});
var group_Amada1996 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop03Sep13Sep1996_35,lyr_AmadaTrack_36,lyr_AmadaTrackPosition_37,],
                                fold: "close",
                                title: "Amada (1996)"});
var group_Francisca1985 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop20Oct29Oct1985_32,lyr_MSLPhPa28101985_33,lyr_FranciscaTrack_34,],
                                fold: "close",
                                title: "Francisca (1985)"});
var group_Callisto1983 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop23Sep02Oct1983_29,lyr_MSLPhPa27091983_30,lyr_CallistoTrack_31,],
                                fold: "close",
                                title: "Callisto (1983)"});
var group_Leucosia1982 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop19Jan28Jan1982_26,lyr_MSLPhPa24011982_27,lyr_LeucosiaTrack_28,],
                                fold: "close",
                                title: "Leucosia (1982)"});
var group_Caecilia1969 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop18Sep27Sep1969_23,lyr_MSLPhPa22091969_24,lyr_CaeciliaTrack_25,],
                                fold: "close",
                                title: "Caecilia (1969)"});
var group_Daniel2023 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop01Sep10Sep2023_19,lyr_DanielTrackPosition_20,lyr_DanielTrack_21,lyr_GeomorphologicalEvidence_22,],
                                fold: "close",
                                title: "Daniel (2023)"});
var group_Juliette2023 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop19Feb28Feb2023_15,lyr_JulietteTrackPosition_16,lyr_JulietteTrack_17,lyr_GeomorphologicalEvidence_18,],
                                fold: "close",
                                title: "Juliette (2023)"});
var group_Helios2023 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop30Jan08Feb2023_8,lyr_HeliosTrackPosition_9,lyr_HeliosTrack_10,lyr_HeliosTrackPoint_11,lyr_HeliosFloodline_12,lyr_HeliosAffectedSites_13,lyr_GeomorphologicalEvidence_14,],
                                fold: "close",
                                title: "Helios (2023)"});
var group_Vaia2018 = new ol.layer.Group({
                                layers: [lyr_ThermalDrop20Oct30Oct2018_5,lyr_VaiaTrackPosition_6,lyr_VaiaTrack_7,],
                                fold: "close",
                                title: "Vaia (2018)"});
var group_AdditionalLayers = new ol.layer.Group({
                                layers: [lyr_Boundary_3,lyr_Boulders_Displacement_4,],
                                fold: "close",
                                title: "Additional Layers"});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_GoogleSatelliteHybrid_0,lyr_GoogleSatellite_1,lyr_ESRIWorldTopo_2,],
                                fold: "close",
                                title: "Basemaps"});


//#######################################################################################

var subgroup_ABC = new ol.layer.Group({
    layers: [
            
            group_Numa2017,
            group_Trixie2016,
            group_Xandra2014,
            group_Illona2014,
            group_Ruven2013,
            group_Samir1996,
            group_Amada1996,
            group_Francisca1985,
            group_Callisto1983,
            group_Leucosia1982,
            group_Caecilia1969
            ],
title: "Mediterranean Tropical Storms" ,
fold:'close'
});

var subgroup_XYZ = new ol.layer.Group({
    layers: [
        group_Apollo2021,
        group_Ianos2020,
        group_Trudy2019,
        group_Zorbas2018,
        group_Qendresa2014,
        group_Rolph2011,
        group_Zeo2005,
        group_Cornelia1996,
        group_Celeno1995,
     ],
title: "Mediterranean Hurricanes" ,
fold:'close'
});


var Alok = new ol.layer.Group({
    layers: [
        subgroup_ABC,
        subgroup_XYZ
    ],
    title: "Tropical Like Cyclones (TLC)",
    fold:'close'
});
var Alok2 = new ol.layer.Group({
layers: [
group_Daniel2023,
group_Juliette2023,
group_Helios2023,
group_Vaia2018
],
title: "Extratropical Cyclones (ETC)",
fold:'close'
});



//######################################################################################


lyr_GoogleSatelliteHybrid_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(false);lyr_ESRIWorldTopo_2.setVisible(true);lyr_Boundary_3.setVisible(false);lyr_Boulders_Displacement_4.setVisible(false);lyr_ThermalDrop20Oct30Oct2018_5.setVisible(false);lyr_VaiaTrackPosition_6.setVisible(false);lyr_VaiaTrack_7.setVisible(false);lyr_ThermalDrop30Jan08Feb2023_8.setVisible(false);lyr_HeliosTrackPosition_9.setVisible(false);lyr_HeliosTrack_10.setVisible(false);lyr_HeliosTrackPoint_11.setVisible(false);lyr_HeliosFloodline_12.setVisible(false);lyr_HeliosAffectedSites_13.setVisible(false);lyr_GeomorphologicalEvidence_14.setVisible(false);lyr_ThermalDrop19Feb28Feb2023_15.setVisible(false);lyr_JulietteTrackPosition_16.setVisible(false);lyr_JulietteTrack_17.setVisible(false);lyr_GeomorphologicalEvidence_18.setVisible(false);lyr_ThermalDrop01Sep10Sep2023_19.setVisible(false);lyr_DanielTrackPosition_20.setVisible(false);lyr_DanielTrack_21.setVisible(false);lyr_GeomorphologicalEvidence_22.setVisible(false);lyr_ThermalDrop18Sep27Sep1969_23.setVisible(false);lyr_MSLPhPa22091969_24.setVisible(false);lyr_CaeciliaTrack_25.setVisible(false);lyr_ThermalDrop19Jan28Jan1982_26.setVisible(false);lyr_MSLPhPa24011982_27.setVisible(false);lyr_LeucosiaTrack_28.setVisible(false);lyr_ThermalDrop23Sep02Oct1983_29.setVisible(false);lyr_MSLPhPa27091983_30.setVisible(false);lyr_CallistoTrack_31.setVisible(false);lyr_ThermalDrop20Oct29Oct1985_32.setVisible(false);lyr_MSLPhPa28101985_33.setVisible(false);lyr_FranciscaTrack_34.setVisible(false);lyr_ThermalDrop03Sep13Sep1996_35.setVisible(false);lyr_AmadaTrack_36.setVisible(false);lyr_AmadaTrackPosition_37.setVisible(false);lyr_ThermalDrop26Sep06Oct1996_38.setVisible(false);lyr_ThermalDrop09Nov19Nov2013_39.setVisible(false);lyr_RuvenTrackPosition_40.setVisible(false);lyr_RuvenTrack_41.setVisible(false);lyr_ThermalDrop09Jan19Jan2014_42.setVisible(false);lyr_IllonaTrackPosition_43.setVisible(false);lyr_IllonaTrack_44.setVisible(false);lyr_ThermalDrop22Nov01Dec2014_45.setVisible(false);lyr_MSLPhPa01122014_46.setVisible(false);lyr_XandraTrackPosition_47.setVisible(false);lyr_XandraTrack_48.setVisible(false);lyr_ThermalDrop19Oct28Oct2016_49.setVisible(false);lyr_MSLPhPa28102016_50.setVisible(false);lyr_TrixieSeismicTrack_51.setVisible(false);lyr_TrixieTrackPosition_52.setVisible(false);lyr_TrixieTrack_53.setVisible(false);lyr_TropicalStormNuma06Nov15Nov2017_54.setVisible(false);lyr_MSLPhPa15112017_55.setVisible(false);lyr_NumaTrackPosition_56.setVisible(false);lyr_NumaTrack_57.setVisible(false);lyr_ThermalDrop05Jan14Jan1995_58.setVisible(false);lyr_MSLPhPa14011995_59.setVisible(false);lyr_CelenoTrackPosition_60.setVisible(false);lyr_CelenoTrack_61.setVisible(false);lyr_ThermalDrop27Sep06Oct1996_62.setVisible(false);lyr_MSLPhPa04101996_63.setVisible(false);lyr_CorneliaTrackPosition_64.setVisible(false);lyr_CorneliaTrack1996_65.setVisible(false);lyr_ThermalDrop03Dec12Dec2005_66.setVisible(false);lyr_MSLPhPa13122005_67.setVisible(false);lyr_ZeoTrackPosition_68.setVisible(false);lyr_ZeoTrack_69.setVisible(false);lyr_ThermalDrop28Oct06Nov2011_70.setVisible(false);lyr_MSLPhPa06112011_71.setVisible(false);lyr_RolphSeismicTrack_72.setVisible(false);lyr_RolphTrackPosition_73.setVisible(false);lyr_RolphTrack_74.setVisible(false);lyr_ThermalDrop29Oct07Nov2014_75.setVisible(false);lyr_MSLPhPa07112014_76.setVisible(false);lyr_QendresaSeismicTrack_77.setVisible(false);lyr_QendresaTrackPosition_78.setVisible(false);lyr_QendresaTrack2014_79.setVisible(false);lyr_QendresaTrackPoint_80.setVisible(false);lyr_QendresaFloodline_81.setVisible(false);lyr_ThermalDrop18Sep27Sep2018_82.setVisible(false);lyr_MSLPhPa27092018_83.setVisible(false);lyr_ZorbasSeismicTrack_84.setVisible(false);lyr_ZorbasTrackPosition_85.setVisible(false);lyr_ZorbasTrack_86.setVisible(false);lyr_ZorbasTrackPoints_87.setVisible(false);lyr_ZorbasFloodline_88.setVisible(false);lyr_ZorbasAffectedSites_89.setVisible(false);lyr_GeomorphologicalEvidence_90.setVisible(false);lyr_ThermalDrop02Nov11Nov2019_91.setVisible(false);lyr_MSLPhPa11112019_92.setVisible(false);lyr_TrudyTrackPosition_93.setVisible(false);lyr_TrudyTrack_94.setVisible(false);lyr_ThermalDrop06Sep15Sep2020_95.setVisible(false);lyr_MSLPhPa15092020_96.setVisible(false);lyr_IanosSeismicTrack_97.setVisible(false);lyr_IanosTrackPosition_98.setVisible(false);lyr_IanosTrack_99.setVisible(false);lyr_IanosTrackPoints_100.setVisible(false);lyr_GeomorphologicalEvidence_101.setVisible(false);lyr_ThermalDrop16Oct25Oct2021_102.setVisible(false);lyr_MSLPhPa25102021_103.setVisible(false);lyr_ApolloSeismicTrack_104.setVisible(false);lyr_ApolloTrackPostion_105.setVisible(false);lyr_ApolloTrack_106.setVisible(false);lyr_GeomorphologicalEvidence_107.setVisible(false);
var layersList = [group_Basemaps,group_AdditionalLayers,Alok2,Alok];
lyr_Boundary_3.set('fieldAliases', {'COMUNE': 'COMUNE', });
lyr_Boulders_Displacement_4.set('fieldAliases', {'Id': 'Id', 'Year': 'Year', 'Name': 'Name', 'ID_1': 'ID_1', });
lyr_VaiaTrackPosition_6.set('fieldAliases', {'Position': 'Position', });
lyr_VaiaTrack_7.set('fieldAliases', {'id': 'id', });
lyr_HeliosTrackPosition_9.set('fieldAliases', {'Position': 'Position', });
lyr_HeliosTrack_10.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_HeliosTrackPoint_11.set('fieldAliases', {'id': 'id', 'Date': 'Date', 'Features': 'Features', });
lyr_HeliosFloodline_12.set('fieldAliases', {'Id': 'Id', });
lyr_HeliosAffectedSites_13.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_GeomorphologicalEvidence_14.set('fieldAliases', {'Caption': 'Caption', 'Field3': 'Field3', 'Image': 'Image', 'Medicane_E': 'Medicane_E', 'Reference': 'Reference', });
lyr_JulietteTrackPosition_16.set('fieldAliases', {'Position': 'Position', });
lyr_JulietteTrack_17.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_GeomorphologicalEvidence_18.set('fieldAliases', {'Caption': 'Caption', 'Field3': 'Field3', 'Image': 'Image', 'Medicane_E': 'Medicane_E', 'Reference': 'Reference', });
lyr_DanielTrackPosition_20.set('fieldAliases', {'Position': 'Position', });
lyr_DanielTrack_21.set('fieldAliases', {'Id': 'Id', });
lyr_GeomorphologicalEvidence_22.set('fieldAliases', {'Caption': 'Caption', 'Field3': 'Field3', 'Image': 'Image', 'Medicane_E': 'Medicane_E', 'Reference': 'Reference', });
lyr_MSLPhPa22091969_24.set('fieldAliases', {'CREATED_BY': 'CREATED_BY', 'CNTR_VALUE': 'CNTR_VALUE', 'SLP_hPa': 'SLP_hPa', });
lyr_CaeciliaTrack_25.set('fieldAliases', {'id': 'id', });
lyr_MSLPhPa24011982_27.set('fieldAliases', {'CREATED_BY': 'CREATED_BY', 'CNTR_VALUE': 'CNTR_VALUE', 'SLP_hPa': 'SLP_hPa', });
lyr_LeucosiaTrack_28.set('fieldAliases', {'id': 'id', });
lyr_MSLPhPa27091983_30.set('fieldAliases', {'CREATED_BY': 'CREATED_BY', 'CNTR_VALUE': 'CNTR_VALUE', 'SLP_hPa': 'SLP_hPa', });
lyr_CallistoTrack_31.set('fieldAliases', {'id': 'id', });
lyr_MSLPhPa28101985_33.set('fieldAliases', {'CREATED_BY': 'CREATED_BY', 'CNTR_VALUE': 'CNTR_VALUE', 'SLP_hPa': 'SLP_hPa', });
lyr_FranciscaTrack_34.set('fieldAliases', {'id': 'id', });
lyr_AmadaTrack_36.set('fieldAliases', {'id': 'id', });
lyr_AmadaTrackPosition_37.set('fieldAliases', {'Position': 'Position', });
lyr_RuvenTrackPosition_40.set('fieldAliases', {'Position': 'Position', });
lyr_RuvenTrack_41.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_IllonaTrackPosition_43.set('fieldAliases', {'Position': 'Position', });
lyr_IllonaTrack_44.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_MSLPhPa01122014_46.set('fieldAliases', {'Event': 'Event', 'hPa': 'hPa', 'SLP_hPa': 'SLP_hPa', });
lyr_XandraTrackPosition_47.set('fieldAliases', {'Position': 'Position', });
lyr_XandraTrack_48.set('fieldAliases', {'Id': 'Id', });
lyr_MSLPhPa28102016_50.set('fieldAliases', {'Event': 'Event', 'hPa': 'hPa', 'SLP_hPa': 'SLP_hPa', });
lyr_TrixieSeismicTrack_51.set('fieldAliases', {'Longitude': 'Longitude', 'Latitude': 'Latitude', 'R2': 'R2', 'Date': 'Date', });
lyr_TrixieTrackPosition_52.set('fieldAliases', {'Position': 'Position', });
lyr_TrixieTrack_53.set('fieldAliases', {'Id': 'Id', });
lyr_MSLPhPa15112017_55.set('fieldAliases', {'Event': 'Event', 'hPa': 'hPa', 'SLP_hPa': 'SLP_hPa', });
lyr_NumaTrackPosition_56.set('fieldAliases', {'Position': 'Position', });
lyr_NumaTrack_57.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', });
lyr_MSLPhPa14011995_59.set('fieldAliases', {'Event': 'Event', 'hPa': 'hPa', 'SLP_hPa': 'SLP_hPa', });
lyr_CelenoTrackPosition_60.set('fieldAliases', {'Position': 'Position', });
lyr_CelenoTrack_61.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_MSLPhPa04101996_63.set('fieldAliases', {'Event': 'Event', 'hPa': 'hPa', 'SLP_hPa': 'SLP_hPa', });
lyr_CorneliaTrackPosition_64.set('fieldAliases', {'Position': 'Position', });
lyr_CorneliaTrack1996_65.set('fieldAliases', {'id': 'id', });
lyr_MSLPhPa13122005_67.set('fieldAliases', {'Event': 'Event', 'hPa': 'hPa', 'SLP_hPa': 'SLP_hPa', });
lyr_ZeoTrackPosition_68.set('fieldAliases', {'Position': 'Position', });
lyr_ZeoTrack_69.set('fieldAliases', {'id': 'id', });
lyr_MSLPhPa06112011_71.set('fieldAliases', {'Event': 'Event', 'hPa': 'hPa', 'SLP_hPa': 'SLP_hPa', });
lyr_RolphSeismicTrack_72.set('fieldAliases', {'lon': 'lon', 'lat': 'lat', 'Time': 'Time', 'Date': 'Date', });
lyr_RolphTrackPosition_73.set('fieldAliases', {'Position': 'Position', });
lyr_RolphTrack_74.set('fieldAliases', {'Id': 'Id', });
lyr_MSLPhPa07112014_76.set('fieldAliases', {'Event': 'Event', 'hPa': 'hPa', 'SLP_hPa': 'SLP_hPa', });
lyr_QendresaSeismicTrack_77.set('fieldAliases', {'Longitude': 'Longitude', 'Latitude': 'Latitude', 'R2': 'R2', 'Date': 'Date', });
lyr_QendresaTrackPosition_78.set('fieldAliases', {'Position': 'Position', });
lyr_QendresaTrack2014_79.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', });
lyr_QendresaTrackPoint_80.set('fieldAliases', {'id': 'id', 'Date': 'Date', 'SST': 'SST', 'SLP': 'SLP', 'Features': 'Features', });
lyr_QendresaFloodline_81.set('fieldAliases', {'Id': 'Id', });
lyr_MSLPhPa27092018_83.set('fieldAliases', {'Event': 'Event', 'hPa': 'hPa', 'SLP_hPa': 'SLP_hPa', });
lyr_ZorbasSeismicTrack_84.set('fieldAliases', {'Longitude': 'Longitude', 'Latitude': 'Latitude', 'R2': 'R2', 'Date': 'Date', });
lyr_ZorbasTrackPosition_85.set('fieldAliases', {'Position': 'Position', });
lyr_ZorbasTrack_86.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_ZorbasTrackPoints_87.set('fieldAliases', {'id': 'id', 'Date': 'Date', 'SLP': 'SLP', 'SST': 'SST', 'Features': 'Features', });
lyr_ZorbasFloodline_88.set('fieldAliases', {'Flood_Ev_1': 'Flood_Ev_1', });
lyr_ZorbasAffectedSites_89.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_GeomorphologicalEvidence_90.set('fieldAliases', {'Caption': 'Caption', 'Field3': 'Field3', 'Image': 'Image', 'Medicane_E': 'Medicane_E', 'Reference': 'Reference', });
lyr_MSLPhPa11112019_92.set('fieldAliases', {'Event': 'Event', 'hPa': 'hPa', 'SLP_hPa': 'SLP_hPa', });
lyr_TrudyTrackPosition_93.set('fieldAliases', {'Position': 'Position', });
lyr_TrudyTrack_94.set('fieldAliases', {'Id': 'Id', });
lyr_MSLPhPa15092020_96.set('fieldAliases', {'Event': 'Event', 'hPa': 'hPa', 'SLP_hPa': 'SLP_hPa', });
lyr_IanosSeismicTrack_97.set('fieldAliases', {'Longitude': 'Longitude', 'Latitude': 'Latitude', 'R2': 'R2', 'Date': 'Date', });
lyr_IanosTrackPosition_98.set('fieldAliases', {'Position': 'Position', });
lyr_IanosTrack_99.set('fieldAliases', {'Id': 'Id', });
lyr_IanosTrackPoints_100.set('fieldAliases', {'id': 'id', 'Date': 'Date', 'Features': 'Features', });
lyr_GeomorphologicalEvidence_101.set('fieldAliases', {'Caption': 'Caption', 'Field3': 'Field3', 'Image': 'Image', 'Medicane_E': 'Medicane_E', 'Reference': 'Reference', });
lyr_MSLPhPa25102021_103.set('fieldAliases', {'Event': 'Event', 'hPa': 'hPa', 'SLP_hPa': 'SLP_hPa', });
lyr_ApolloSeismicTrack_104.set('fieldAliases', {'Longitude': 'Longitude', 'Latitude': 'Latitude', 'R2': 'R2', 'Date': 'Date', });
lyr_ApolloTrackPostion_105.set('fieldAliases', {'Position': 'Position', });
lyr_ApolloTrack_106.set('fieldAliases', {'id': 'id', });
lyr_GeomorphologicalEvidence_107.set('fieldAliases', {'Caption': 'Caption', 'Field3': 'Field3', 'Image': 'Image', 'Medicane_E': 'Medicane_E', 'Reference': 'Reference', });
lyr_Boundary_3.set('fieldImages', {'COMUNE': 'TextEdit', });
lyr_Boulders_Displacement_4.set('fieldImages', {'Id': 'Range', 'Year': 'TextEdit', 'Name': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_VaiaTrackPosition_6.set('fieldImages', {'Position': 'TextEdit', });
lyr_VaiaTrack_7.set('fieldImages', {'id': 'TextEdit', });
lyr_HeliosTrackPosition_9.set('fieldImages', {'Position': 'TextEdit', });
lyr_HeliosTrack_10.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_HeliosTrackPoint_11.set('fieldImages', {'id': 'TextEdit', 'Date': 'TextEdit', 'Features': 'ExternalResource', });
lyr_HeliosFloodline_12.set('fieldImages', {'Id': 'Range', });
lyr_HeliosAffectedSites_13.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_GeomorphologicalEvidence_14.set('fieldImages', {'Caption': 'TextEdit', 'Field3': 'TextEdit', 'Image': 'ExternalResource', 'Medicane_E': 'TextEdit', 'Reference': 'TextEdit', });
lyr_JulietteTrackPosition_16.set('fieldImages', {'Position': 'TextEdit', });
lyr_JulietteTrack_17.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_GeomorphologicalEvidence_18.set('fieldImages', {'Caption': 'TextEdit', 'Field3': 'TextEdit', 'Image': 'ExternalResource', 'Medicane_E': 'TextEdit', 'Reference': 'TextEdit', });
lyr_DanielTrackPosition_20.set('fieldImages', {'Position': 'TextEdit', });
lyr_DanielTrack_21.set('fieldImages', {'Id': 'TextEdit', });
lyr_GeomorphologicalEvidence_22.set('fieldImages', {'Caption': 'TextEdit', 'Field3': 'TextEdit', 'Image': 'ExternalResource', 'Medicane_E': 'TextEdit', 'Reference': 'TextEdit', });
lyr_MSLPhPa22091969_24.set('fieldImages', {'CREATED_BY': 'TextEdit', 'CNTR_VALUE': 'TextEdit', 'SLP_hPa': 'Range', });
lyr_CaeciliaTrack_25.set('fieldImages', {'id': 'TextEdit', });
lyr_MSLPhPa24011982_27.set('fieldImages', {'CREATED_BY': 'TextEdit', 'CNTR_VALUE': 'TextEdit', 'SLP_hPa': 'Range', });
lyr_LeucosiaTrack_28.set('fieldImages', {'id': '', });
lyr_MSLPhPa27091983_30.set('fieldImages', {'CREATED_BY': 'TextEdit', 'CNTR_VALUE': 'TextEdit', 'SLP_hPa': 'Range', });
lyr_CallistoTrack_31.set('fieldImages', {'id': '', });
lyr_MSLPhPa28101985_33.set('fieldImages', {'CREATED_BY': 'TextEdit', 'CNTR_VALUE': 'TextEdit', 'SLP_hPa': 'Range', });
lyr_FranciscaTrack_34.set('fieldImages', {'id': 'TextEdit', });
lyr_AmadaTrack_36.set('fieldImages', {'id': 'TextEdit', });
lyr_AmadaTrackPosition_37.set('fieldImages', {'Position': 'TextEdit', });
lyr_RuvenTrackPosition_40.set('fieldImages', {'Position': 'TextEdit', });
lyr_RuvenTrack_41.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', });
lyr_IllonaTrackPosition_43.set('fieldImages', {'Position': 'TextEdit', });
lyr_IllonaTrack_44.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', });
lyr_MSLPhPa01122014_46.set('fieldImages', {'Event': 'TextEdit', 'hPa': 'TextEdit', 'SLP_hPa': 'Range', });
lyr_XandraTrackPosition_47.set('fieldImages', {'Position': 'TextEdit', });
lyr_XandraTrack_48.set('fieldImages', {'Id': 'TextEdit', });
lyr_MSLPhPa28102016_50.set('fieldImages', {'Event': 'TextEdit', 'hPa': 'TextEdit', 'SLP_hPa': 'Range', });
lyr_TrixieSeismicTrack_51.set('fieldImages', {'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'R2': 'TextEdit', 'Date': 'TextEdit', });
lyr_TrixieTrackPosition_52.set('fieldImages', {'Position': 'TextEdit', });
lyr_TrixieTrack_53.set('fieldImages', {'Id': 'TextEdit', });
lyr_MSLPhPa15112017_55.set('fieldImages', {'Event': 'TextEdit', 'hPa': 'TextEdit', 'SLP_hPa': 'Range', });
lyr_NumaTrackPosition_56.set('fieldImages', {'Position': 'TextEdit', });
lyr_NumaTrack_57.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_MSLPhPa14011995_59.set('fieldImages', {'Event': 'TextEdit', 'hPa': 'TextEdit', 'SLP_hPa': 'Range', });
lyr_CelenoTrackPosition_60.set('fieldImages', {'Position': 'TextEdit', });
lyr_CelenoTrack_61.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_MSLPhPa04101996_63.set('fieldImages', {'Event': 'TextEdit', 'hPa': 'TextEdit', 'SLP_hPa': 'Range', });
lyr_CorneliaTrackPosition_64.set('fieldImages', {'Position': 'TextEdit', });
lyr_CorneliaTrack1996_65.set('fieldImages', {'id': 'TextEdit', });
lyr_MSLPhPa13122005_67.set('fieldImages', {'Event': 'TextEdit', 'hPa': 'TextEdit', 'SLP_hPa': 'Range', });
lyr_ZeoTrackPosition_68.set('fieldImages', {'Position': 'TextEdit', });
lyr_ZeoTrack_69.set('fieldImages', {'id': 'TextEdit', });
lyr_MSLPhPa06112011_71.set('fieldImages', {'Event': 'TextEdit', 'hPa': 'TextEdit', 'SLP_hPa': 'Range', });
lyr_RolphSeismicTrack_72.set('fieldImages', {'lon': 'TextEdit', 'lat': 'TextEdit', 'Time': 'DateTime', 'Date': 'TextEdit', });
lyr_RolphTrackPosition_73.set('fieldImages', {'Position': 'TextEdit', });
lyr_RolphTrack_74.set('fieldImages', {'Id': 'TextEdit', });
lyr_MSLPhPa07112014_76.set('fieldImages', {'Event': 'TextEdit', 'hPa': 'TextEdit', 'SLP_hPa': 'Range', });
lyr_QendresaSeismicTrack_77.set('fieldImages', {'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'R2': 'TextEdit', 'Date': 'TextEdit', });
lyr_QendresaTrackPosition_78.set('fieldImages', {'Position': 'TextEdit', });
lyr_QendresaTrack2014_79.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_QendresaTrackPoint_80.set('fieldImages', {'id': 'TextEdit', 'Date': 'TextEdit', 'SST': 'TextEdit', 'SLP': 'TextEdit', 'Features': 'ExternalResource', });
lyr_QendresaFloodline_81.set('fieldImages', {'Id': 'Range', });
lyr_MSLPhPa27092018_83.set('fieldImages', {'Event': 'TextEdit', 'hPa': 'TextEdit', 'SLP_hPa': 'Range', });
lyr_ZorbasSeismicTrack_84.set('fieldImages', {'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'R2': 'TextEdit', 'Date': 'TextEdit', });
lyr_ZorbasTrackPosition_85.set('fieldImages', {'Position': 'TextEdit', });
lyr_ZorbasTrack_86.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_ZorbasTrackPoints_87.set('fieldImages', {'id': 'TextEdit', 'Date': 'TextEdit', 'SLP': 'TextEdit', 'SST': 'TextEdit', 'Features': 'ExternalResource', });
lyr_ZorbasFloodline_88.set('fieldImages', {'Flood_Ev_1': 'TextEdit', });
lyr_ZorbasAffectedSites_89.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_GeomorphologicalEvidence_90.set('fieldImages', {'Caption': 'TextEdit', 'Field3': 'TextEdit', 'Image': 'ExternalResource', 'Medicane_E': 'TextEdit', 'Reference': 'TextEdit', });
lyr_MSLPhPa11112019_92.set('fieldImages', {'Event': 'TextEdit', 'hPa': 'TextEdit', 'SLP_hPa': 'Range', });
lyr_TrudyTrackPosition_93.set('fieldImages', {'Position': 'TextEdit', });
lyr_TrudyTrack_94.set('fieldImages', {'Id': 'TextEdit', });
lyr_MSLPhPa15092020_96.set('fieldImages', {'Event': 'TextEdit', 'hPa': 'TextEdit', 'SLP_hPa': 'Range', });
lyr_IanosSeismicTrack_97.set('fieldImages', {'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'R2': 'TextEdit', 'Date': 'TextEdit', });
lyr_IanosTrackPosition_98.set('fieldImages', {'Position': 'TextEdit', });
lyr_IanosTrack_99.set('fieldImages', {'Id': 'Range', });
lyr_IanosTrackPoints_100.set('fieldImages', {'id': 'TextEdit', 'Date': 'TextEdit', 'Features': 'ExternalResource', });
lyr_GeomorphologicalEvidence_101.set('fieldImages', {'Caption': 'TextEdit', 'Field3': 'TextEdit', 'Image': 'ExternalResource', 'Medicane_E': 'TextEdit', 'Reference': 'TextEdit', });
lyr_MSLPhPa25102021_103.set('fieldImages', {'Event': 'TextEdit', 'hPa': 'TextEdit', 'SLP_hPa': 'Range', });
lyr_ApolloSeismicTrack_104.set('fieldImages', {'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'R2': 'TextEdit', 'Date': 'TextEdit', });
lyr_ApolloTrackPostion_105.set('fieldImages', {'Position': 'TextEdit', });
lyr_ApolloTrack_106.set('fieldImages', {'id': 'TextEdit', });
lyr_GeomorphologicalEvidence_107.set('fieldImages', {'Caption': 'TextEdit', 'Field3': 'TextEdit', 'Image': 'ExternalResource', 'Medicane_E': 'TextEdit', 'Reference': 'TextEdit', });
lyr_Boundary_3.set('fieldLabels', {'COMUNE': 'no label', });
lyr_Boulders_Displacement_4.set('fieldLabels', {'Id': 'no label', 'Year': 'no label', 'Name': 'no label', 'ID_1': 'no label', });
lyr_VaiaTrackPosition_6.set('fieldLabels', {'Position': 'no label', });
lyr_VaiaTrack_7.set('fieldLabels', {'id': 'no label', });
lyr_HeliosTrackPosition_9.set('fieldLabels', {'Position': 'no label', });
lyr_HeliosTrack_10.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_HeliosTrackPoint_11.set('fieldLabels', {'id': 'no label', 'Date': 'no label', 'Features': 'no label', });
lyr_HeliosFloodline_12.set('fieldLabels', {'Id': 'no label', });
lyr_HeliosAffectedSites_13.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', });
lyr_GeomorphologicalEvidence_14.set('fieldLabels', {'Caption': 'no label', 'Field3': 'no label', 'Image': 'no label', 'Medicane_E': 'no label', 'Reference': 'no label', });
lyr_JulietteTrackPosition_16.set('fieldLabels', {'Position': 'no label', });
lyr_JulietteTrack_17.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_GeomorphologicalEvidence_18.set('fieldLabels', {'Caption': 'no label', 'Field3': 'no label', 'Image': 'no label', 'Medicane_E': 'no label', 'Reference': 'no label', });
lyr_DanielTrackPosition_20.set('fieldLabels', {'Position': 'no label', });
lyr_DanielTrack_21.set('fieldLabels', {'Id': 'no label', });
lyr_GeomorphologicalEvidence_22.set('fieldLabels', {'Caption': 'no label', 'Field3': 'no label', 'Image': 'no label', 'Medicane_E': 'no label', 'Reference': 'no label', });
lyr_MSLPhPa22091969_24.set('fieldLabels', {'CREATED_BY': 'no label', 'CNTR_VALUE': 'no label', 'SLP_hPa': 'no label', });
lyr_CaeciliaTrack_25.set('fieldLabels', {'id': 'no label', });
lyr_MSLPhPa24011982_27.set('fieldLabels', {'CREATED_BY': 'no label', 'CNTR_VALUE': 'no label', 'SLP_hPa': 'no label', });
lyr_LeucosiaTrack_28.set('fieldLabels', {'id': 'no label', });
lyr_MSLPhPa27091983_30.set('fieldLabels', {'CREATED_BY': 'no label', 'CNTR_VALUE': 'no label', 'SLP_hPa': 'no label', });
lyr_CallistoTrack_31.set('fieldLabels', {'id': 'no label', });
lyr_MSLPhPa28101985_33.set('fieldLabels', {'CREATED_BY': 'no label', 'CNTR_VALUE': 'no label', 'SLP_hPa': 'no label', });
lyr_FranciscaTrack_34.set('fieldLabels', {'id': 'no label', });
lyr_AmadaTrack_36.set('fieldLabels', {'id': 'no label', });
lyr_AmadaTrackPosition_37.set('fieldLabels', {'Position': 'no label', });
lyr_RuvenTrackPosition_40.set('fieldLabels', {'Position': 'no label', });
lyr_RuvenTrack_41.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_IllonaTrackPosition_43.set('fieldLabels', {'Position': 'no label', });
lyr_IllonaTrack_44.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_MSLPhPa01122014_46.set('fieldLabels', {'Event': 'no label', 'hPa': 'no label', 'SLP_hPa': 'no label', });
lyr_XandraTrackPosition_47.set('fieldLabels', {'Position': 'no label', });
lyr_XandraTrack_48.set('fieldLabels', {'Id': 'no label', });
lyr_MSLPhPa28102016_50.set('fieldLabels', {'Event': 'no label', 'hPa': 'no label', 'SLP_hPa': 'no label', });
lyr_TrixieSeismicTrack_51.set('fieldLabels', {'Longitude': 'no label', 'Latitude': 'no label', 'R2': 'no label', 'Date': 'no label', });
lyr_TrixieTrackPosition_52.set('fieldLabels', {'Position': 'no label', });
lyr_TrixieTrack_53.set('fieldLabels', {'Id': 'no label', });
lyr_MSLPhPa15112017_55.set('fieldLabels', {'Event': 'no label', 'hPa': 'no label', 'SLP_hPa': 'no label', });
lyr_NumaTrackPosition_56.set('fieldLabels', {'Position': 'no label', });
lyr_NumaTrack_57.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', });
lyr_MSLPhPa14011995_59.set('fieldLabels', {'Event': 'no label', 'hPa': 'no label', 'SLP_hPa': 'no label', });
lyr_CelenoTrackPosition_60.set('fieldLabels', {'Position': 'no label', });
lyr_CelenoTrack_61.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_MSLPhPa04101996_63.set('fieldLabels', {'Event': 'no label', 'hPa': 'no label', 'SLP_hPa': 'no label', });
lyr_CorneliaTrackPosition_64.set('fieldLabels', {'Position': 'no label', });
lyr_CorneliaTrack1996_65.set('fieldLabels', {'id': 'no label', });
lyr_MSLPhPa13122005_67.set('fieldLabels', {'Event': 'no label', 'hPa': 'no label', 'SLP_hPa': 'no label', });
lyr_ZeoTrackPosition_68.set('fieldLabels', {'Position': 'no label', });
lyr_ZeoTrack_69.set('fieldLabels', {'id': 'no label', });
lyr_MSLPhPa06112011_71.set('fieldLabels', {'Event': 'no label', 'hPa': 'no label', 'SLP_hPa': 'no label', });
lyr_RolphSeismicTrack_72.set('fieldLabels', {'lon': 'no label', 'lat': 'no label', 'Time': 'no label', 'Date': 'no label', });
lyr_RolphTrackPosition_73.set('fieldLabels', {'Position': 'no label', });
lyr_RolphTrack_74.set('fieldLabels', {'Id': 'no label', });
lyr_MSLPhPa07112014_76.set('fieldLabels', {'Event': 'no label', 'hPa': 'no label', 'SLP_hPa': 'no label', });
lyr_QendresaSeismicTrack_77.set('fieldLabels', {'Longitude': 'no label', 'Latitude': 'no label', 'R2': 'no label', 'Date': 'no label', });
lyr_QendresaTrackPosition_78.set('fieldLabels', {'Position': 'no label', });
lyr_QendresaTrack2014_79.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', });
lyr_QendresaTrackPoint_80.set('fieldLabels', {'id': 'no label', 'Date': 'no label', 'SST': 'no label', 'SLP': 'no label', 'Features': 'no label', });
lyr_QendresaFloodline_81.set('fieldLabels', {'Id': 'no label', });
lyr_MSLPhPa27092018_83.set('fieldLabels', {'Event': 'no label', 'hPa': 'no label', 'SLP_hPa': 'no label', });
lyr_ZorbasSeismicTrack_84.set('fieldLabels', {'Longitude': 'no label', 'Latitude': 'no label', 'R2': 'no label', 'Date': 'no label', });
lyr_ZorbasTrackPosition_85.set('fieldLabels', {'Position': 'no label', });
lyr_ZorbasTrack_86.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_ZorbasTrackPoints_87.set('fieldLabels', {'id': 'no label', 'Date': 'no label', 'SLP': 'no label', 'SST': 'no label', 'Features': 'no label', });
lyr_ZorbasFloodline_88.set('fieldLabels', {'Flood_Ev_1': 'no label', });
lyr_ZorbasAffectedSites_89.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', });
lyr_GeomorphologicalEvidence_90.set('fieldLabels', {'Caption': 'no label', 'Field3': 'no label', 'Image': 'no label', 'Medicane_E': 'no label', 'Reference': 'no label', });
lyr_MSLPhPa11112019_92.set('fieldLabels', {'Event': 'no label', 'hPa': 'no label', 'SLP_hPa': 'no label', });
lyr_TrudyTrackPosition_93.set('fieldLabels', {'Position': 'no label', });
lyr_TrudyTrack_94.set('fieldLabels', {'Id': 'no label', });
lyr_MSLPhPa15092020_96.set('fieldLabels', {'Event': 'no label', 'hPa': 'no label', 'SLP_hPa': 'no label', });
lyr_IanosSeismicTrack_97.set('fieldLabels', {'Longitude': 'no label', 'Latitude': 'no label', 'R2': 'no label', 'Date': 'no label', });
lyr_IanosTrackPosition_98.set('fieldLabels', {'Position': 'no label', });
lyr_IanosTrack_99.set('fieldLabels', {'Id': 'no label', });
lyr_IanosTrackPoints_100.set('fieldLabels', {'id': 'no label', 'Date': 'no label', 'Features': 'no label', });
lyr_GeomorphologicalEvidence_101.set('fieldLabels', {'Caption': 'no label', 'Field3': 'no label', 'Image': 'no label', 'Medicane_E': 'no label', 'Reference': 'no label', });
lyr_MSLPhPa25102021_103.set('fieldLabels', {'Event': 'no label', 'hPa': 'no label', 'SLP_hPa': 'no label', });
lyr_ApolloSeismicTrack_104.set('fieldLabels', {'Longitude': 'no label', 'Latitude': 'no label', 'R2': 'no label', 'Date': 'no label', });
lyr_ApolloTrackPostion_105.set('fieldLabels', {'Position': 'no label', });
lyr_ApolloTrack_106.set('fieldLabels', {'id': 'no label', });
lyr_GeomorphologicalEvidence_107.set('fieldLabels', {'Caption': 'no label', 'Field3': 'no label', 'Image': 'no label', 'Medicane_E': 'no label', 'Reference': 'no label', });
lyr_GeomorphologicalEvidence_107.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});