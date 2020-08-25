const { registerBlockType } = wp.blocks;
const { MediaUpload, RichText, URLInputButton, BlockControls, AlignmentToolbar, InspectorControls } = wp.editor;
const { IconButton, PanelBody, TextControl } = wp.components;

//Logo para el bloque
import { ReactComponent as Logo } from '../pizzeria-icon.svg';

registerBlockType('lapizzeria/hero', {
    title: 'La Pizzeria Hero',
    icon: { src: Logo },
    category: 'lapizzeria',
    attributes: {
        imagenHero: {
            type: 'string',
            selector: '.hero-block'
        },
        tituloHero: {
            type:'string',
            source: 'html',
            selector: '.hero-block h1'
        },
        textoHero: {
            type: 'string',
            source: 'html',
            selector: '.hero-block p'
        },
        urlHero: {
            type: 'string',
            source: 'attibute',
            attibute: 'href'
        },
        alinearContenido: {
            type: 'string',
            default: 'center'
        },
        alturaHero: {
            type: 'number'
        }
    },
    supports: {
        align: ['wide', 'full'] //El tema tiene que soportar esto, hay que poner add_theme_support('align-wide'); en el functions.php 
    },
    edit: props => {

        //Extraemos los valores
        const { attributes: { imagenHero, tituloHero, textoHero, urlHero, alinearContenido, alturaHero }, setAttributes } = props;

        const onSeleccionarImagen = nuevaImagen => {
            setAttributes({ imagenHero : nuevaImagen.sizes.full.url });
        }

        const onChangeTitulo = nuevoTitulo => {
            setAttributes({ tituloHero : nuevoTitulo });
        }

        const onChangeTexto = nuevoTexto => {
            setAttributes({ textoHero : nuevoTexto });
        }

        const onChangeURL = nuevaURL => {
            setAttributes({ urlHero : nuevaURL });
        }

        const onChangeAliearContenido = nuevoAlineamiento => {
            setAttributes({ alinearContenido : nuevoAlineamiento });
        } 

        const onChangeAlturaHero = nuevaAlturaHero => {
            setAttributes({ alturaHero : nuevaAlturaHero });
        }

        return(
            <>
                <InspectorControls>
                    <PanelBody
                        title={ 'Altura del Hero' }
                        initialOpen={ true }
                    >
                    <div classname="components-base-control">
                        <div className="components-base-control__field">
                            <label className="components-base-control__label">
                                Altura en Pixeles
                            </label>
                            <TextControl
                                type="number"
                                max={ 700 }
                                min={ 300 }
                                step={ 10 }
                                value={ alturaHero || 500 }
                                onChange={ onChangeAlturaHero }
                            />
                        </div>
                    </div>
                    </PanelBody>
                </InspectorControls>

                <div className="hero-block" 
                style={{ 
                    backgroundImage : `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${ imagenHero })`,
                     textAlign: alinearContenido,
                     height: `${ alturaHero || 500 }px` }}>

                    <BlockControls>
                        <AlignmentToolbar
                            onChange={ onChangeAliearContenido }
                            value={ alinearContenido }
                        />
                    </BlockControls>

                    <MediaUpload
                        onSelect={ onSeleccionarImagen }
                        type="image"
                        render={ ({ open }) => (
                            <IconButton
                                className="lapizzeria-agregar-imagen"
                                onClick={ open }
                                icon="format-image"
                                showTooltip="true"
                                label="Cambiar Imagen"
                            />
                        )}
                    />

                    <div className="contenido-hero">
                        <h1 classsName="titulo">
                            <RichText
                                placeholder={ 'Agregar el Título del Hero' }
                                onChange={ onChangeTitulo }
                                value={ tituloHero }
                            />
                        </h1>
                        <p>
                        <RichText
                                placeholder={ 'Agregar el Texto del Hero' }
                                onChange={ onChangeTexto }
                                value={ textoHero }
                            />
                        </p>
                        <div>
                            <a href={ urlHero } className="boton boton-primario"> Leer Más </a>
                        </div>
                        <URLInputButton 
                            onChange={ onChangeURL }
                            url={ urlHero }
                        />

                    </div>
                </div>
            </>
        )
    },
    save: props => {

        //Extraemos los valores
        const { attributes: { imagenHero, tituloHero, textoHero, urlHero, alinearContenido, alturaHero } } = props;

        return(
            <div className="hero-block" style={{ 
                backgroundImage : `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${ imagenHero })`,
                textAlign: alinearContenido,
                 height: `${ alturaHero || 500 }px` }}>

                <div className="contenido-hero">
                    <h1 classsName="titulo">
                        <RichText.Content
                            value={ tituloHero }
                        />
                    </h1>
                    <p>
                    <RichText.Content
                            value={ textoHero }
                        />
                    </p>
                    <div>
                        <a href={ urlHero } className="boton boton-primario"> Leer Más </a>
                    </div>
                </div>

            </div>
        )
    }
})