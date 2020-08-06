const { registerBlockType } = wp.blocks;
//Importamos componente richtext que nos sirve para escribir en gutenberg
const { RichText, InspectorControls, ColorPalette } = wp.editor;
const { PanelBody } = wp.components;

//Logo para el bloque
import { ReactComponent as Logo } from '../pizzeria-icon.svg';

/**
 * LOS 7 PASOS PARA DESARROLLAR BLOQUES EN GUTENBERG
 *  1.- Importar el/los componente/s que vayas a utilizar.
 *  2.- Coloca el componente donde deseas utilizarlo.
 *  3.- Crea una función que lea los contenidos.
 *  4.- Registra un Atributo.
 *  5.- Extraer el contenido desde props.
 *  6.- Guarda el contenido con setAtributes.
 *  7.- Lee los contenidos guardados en save().
 */

registerBlockType('lapizzeria/boxes', {
    title: 'Pizzeria Cajas',
    icon: { src: Logo },
    category: 'lapizzeria',
    attributes: {
        headingBox: {
            type: 'string',
            source: 'html',
            selector: '.box h2'
        },
        textoBox: {
            type: 'string',
            source: 'html',
            selector: '.box p'
        },
        colorFondo: {
            type: 'string'
        }
    },
    edit: (props) => {
        console.log(props);
        //EXTRAER EL CONTENIDO DESDE PROPS
        const { attributes: { headingBox, textoBox, colorFondo }, setAttributes } = props;

        //Funcion para guardar en los atributos del props  el texto del h2
        const onChangeHeadingBox = (nuevoHeading) => {
            //GUARDAMOS EL CONTENIDO CON setAttributes.
            setAttributes({ headingBox: nuevoHeading });
        }

        //Funcion para guardar en los atributos del props  el texto del parrafo
        const onChageTextoBox = (nuevoTexto) => {
            setAttributes({ textoBox: nuevoTexto });
        }

        //Funcion para cambiar el color del fondo
        const onChangeColorFondo = (nuevoColorFondo) => {
            console.log(nuevoColorFondo);
            setAttributes({ colorFondo: nuevoColorFondo });
        }

        return(
            //Puede provocar un error porque no se pueden devolver 2 componentes 
            //distintos a menos que algo los englobe, por eso ponemos el elemento vacio antes (bien podria ser un div en otros casos).
            <>
                <InspectorControls>
                    <PanelBody title={'Color de Fondo'} initialOpen={true}>
                        <div classname="components-base-control">
                            <div className="components-base-control__field">
                                <label className="components-base-control__label">
                                    Color del Fondo
                                </label>
                                <ColorPalette onChange={ onChangeColorFondo } value={ colorFondo }/>
                            </div>
                        </div>
                    </PanelBody>
                </InspectorControls>
                <div className="box" style={{ backgroundColor: colorFondo }}>
                    <h2>
                        <RichText placeholder="Agrega el Encabezado." onChange={ onChangeHeadingBox } value={ headingBox }/>
                    </h2>
                    <p>
                        <RichText placeholder="Agrega un texto." onChange={ onChageTextoBox } value={ textoBox } />
                    </p>
                </div>
            </>
        )
    },
    save: (props) => {
        console.log(props);
        //EXTRAER EL CONTENIDO DESDE PROPS PARA LEER LOS ATRIBUTOS
        const { attributes: { headingBox, textoBox, colorFondo } } = props;

        //GUARDAMOS LOS ATRIBUTOS
        return(
            <div className="box" style={{ backgroundColor: colorFondo }}>
                <h2>
                    <RichText.Content value={ headingBox }/>
                </h2>
                <p>
                    <RichText.Content value={ textoBox } />
                </p>
            </div>
        )
    }
});