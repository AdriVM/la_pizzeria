const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data; //withSelect es como el wp_query de guttenberg

//Logo para el bloque
import { ReactComponent as Logo } from '../pizzeria-icon.svg';

registerBlockType('lapizzeria/menu', {
    title: 'La Pizzeria Menú',
    icon: { src: Logo },
    category: 'lapizzeria',
    edit: withSelect( (select) => {
        return{
            //Enviar una peticion a la API
            especialidades: select("core").getEntityRecords('postType','especialidades')
        }
    })
    ( ({ especialidades })  => {
        console.log(especialidades);
        return(
            <>
            <h2>Nuestras Especialidades</h2>
            <ul className="nuestro-menu">
                {especialidades.map(especialidad => (
                    <li>
                        <h3>{especialidad.title.raw}</h3>
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