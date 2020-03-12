import React from 'react';
import { loadModules } from 'esri-loader';



export class Geometria extends React.Component {
    componentDidMount() {
        if(this.props.view){
            this.props.view.when(this.onViewLoaded);
        }
    }

    onViewLoaded = (view) => {
        loadModules(['esri/Graphic']).then(([Graphic]) => {
            const polygon = {
                type: "polygon", // autocasts as new Polygon()
                rings: [
                    [-64.78, 32.3],
                    [-66.07, 18.45],
                    [-80.21, 25.78],
                    [-64.78, 32.3]
                ]
            };

            // Create a symbol for rendering the graphic
            const fillSymbol = {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: [227, 139, 79, 0.8],
                outline: { // autocasts as new SimpleLineSymbol()
                    color: [255, 255, 255],
                    width: 1
                }
            };

            // Add the geometry and symbol to a new graphic
            const graphic = new Graphic({
                geometry: polygon,
                symbol: fillSymbol
            });
            //setGraphic(graphic);
            view.graphics.add(graphic);
        }).catch((err) => console.error(err));
    }
  
    componentWillUnmount() {
    }
  
    render() {
      return (<div></div>      );
    }
  }
  export default Geometria;
