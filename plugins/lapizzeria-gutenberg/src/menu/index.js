const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data; //withSelect es como el wp_query de guttenberg
const { RichText, InspectorControls } = wp.blockEditor;
const { PanelBody, RangeControl, SelectControl, TextControl } = wp.components;

//Logo para el bloque
import { ReactComponent as Logo } from '../pizzeria-icon.svg';

registerBlockType('lapizzeria/menu', {
    title: 'La Pizzeria Menú',
    icon: { src: Logo },
    category: 'lapizzeria',
    attributes: {
        cantidadMostrar: {
            type: 'number',
            default: 4
        },
        categoriaMenu: {
            type: 'number'
        },
        tituloBloque: {
            type:'string',
            default: 'Titulo Bloque'
        }
    },
    edit: withSelect( (select, props) => {

        // Extraemos los valores del props
        const { attributes: { cantidadMostrar, categoriaMenu }, setAttributes } = props;

        //Pos el scope de javascript la funcion no esta definida porque solo esta definida en el edit y no en especialidades donde es llamada.
        //Para que no de error, se lo pasamos en el return para que esté disponible con las espcialidades.
        const onChangeCantidadAMostrar = nuevaCantidad => {
            setAttributes({ cantidadMostrar : parseInt( nuevaCantidad ) });
        }

        const onChangeCategoriaMenu = nuevaCategoria => {
            setAttributes({ categoriaMenu :  nuevaCategoria });
        }

        const onChangeTituloBloque = nuevoTitulo => {
            setAttributes({ tituloBloque : nuevoTitulo });
        }

        return{
            //Lamamos a la taxonomia en la API
            categorias: select("core").getEntityRecords('taxonomy', 'categoria-menu'),

            //Enviar una peticion a la API
            especialidades: select("core").getEntityRecords('postType','especialidades', {
                'categoria-menu': categoriaMenu,
                per_page: cantidadMostrar
            }), 
            onChangeCantidadAMostrar,
            onChangeCategoriaMenu,
            onChangeTituloBloque,
            props
        }
    })
    ( ({ categorias, especialidades, onChangeCantidadAMostrar, onChangeCategoriaMenu, onChangeTituloBloque, props })  => {
        console.log(categorias);

        // Extraemos los valores del props
        const { attributes: { cantidadMostrar, categoriaMenu, tituloBloque } } = props;

        /**
         * ACLARACIÓN AL ERROR DE .MAP:
         * 
         * El error de que nos falle el bloque cada vez que recargamos la página se debe a que la rest-api
         * tarda un mas en devolver los datos que lo que tarda .map, por lo que da error.
         * 
         * Para solucionarlo, verificaremos las especilidades y comprobaremos si finalmento no hay nada.
         **/

//##################################################################################################################

        //VERIFICAR ESPCIALIDADES
        if(!especialidades){
            return 'Cargando Especialidades...';
        }

        //SI NO HAY ESPECIALIDADES
        if(especialidades && especialidades.length === 0){
            return 'No hay especialidades.';
        }

        //VERIFICAMOS CATEGORIAS
        if(!categorias) {
            console.log('No hay categorias');
            return null;
        }
        if(categorias && categorias.length === 0) {
            console.log('No hay categorias');
            return null;
        }

        // Generar label y value a categorias
        categorias.forEach( categoria =>{
            categoria['label'] = categoria.name;
            categoria['value'] = categoria.id;
        })

        // Arreglo con valores por default
        const opcionDefault = [{ value: '', label : ' -- Todos -- '}];
        const listadoCategorias = [...opcionDefault, ...categorias ];

        return(
            <>

            <InspectorControls>
                <PanelBody title={'Cantidad a Mostrar'} initialOpen={true}>
                    <div classname="components-base-control">
                        <div className="components-base-control__field">
                            <label className="components-base-control__label">
                                Cantidad a Mostrar
                            </label>
                            <RangeControl 
                                onChange={ onChangeCantidadAMostrar }
                                min={ 2 }
                                max={ 10 }
                                value={ cantidadMostrar }
                            />
                        </div>
                    </div>
                </PanelBody>

                <PanelBody title={'Categoría de Especialidad'} initialOpen={false}>
                    <div classname="components-base-control">
                        <div className="components-base-control__field">
                            <label className="components-base-control__label">
                            Categoría de Especialidad
                            </label>
                            <SelectControl
                            options={ listadoCategorias }
                            onChange={ onChangeCategoriaMenu }
                            value={ categoriaMenu }
                            />
                        </div>
                    </div>
                </PanelBody>

                <PanelBody title={'Título Bloque'} initialOpen={false}>
                    <div classname="components-base-control">
                        <div className="components-base-control__field">
                            <label className="components-base-control__label">
                                Título Bloque
                            </label>
                            <TextControl 
                                    onChange={onChangeTituloBloque}
                                    value={tituloBloque}
                            />
                        </div>
                    </div>
                </PanelBody>
            </InspectorControls>

            <h2 className="titulo-menu">{ tituloBloque }</h2>
            <ul className="nuestro-menu">
                {especialidades.map(especialidad => (
                    <li>
                        <img src={especialidad.imagen_destacada} />
                        <div className="platillo">
                            <div className="precio-titulo">
                                <h3>{especialidad.title.raw}</h3>
                                <p>€ {especialidad.precio}</p>
                            </div>
                            <div className="contenido-platillo">
                                <p>
                                    <RichText.Content value={especialidad.content.rendered} />
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            </>
        )
    }),
    save: () => {
       return null; //Porque no se usa este, se usa el render_callback que llama a la funcion lapizzeria_especialidades_front_end en lapizzeria-gutenberg.php
    }

});