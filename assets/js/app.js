document.addEventListener('DOMContentLoaded', function() {
    
    //Verificación de alturas (debug inicial)
    function debugHeights() {
        console.log('[Debug] Alturas de elementos:');
        console.log('Navbar:', document.querySelector('.navbar').offsetHeight, 'px');
        console.log('Player:', document.querySelector('.player').offsetHeight, 'px');
        console.log('Ventana:', window.innerHeight, 'px');
    }
    
    // Ejecutar al cargar y al cambiar tamaño
    window.addEventListener('load', debugHeights);
    window.addEventListener('resize', debugHeights);
    
    
    // Selección de elementos
    const audioPlayer = document.getElementById('audio-player');
    const playBtns = document.querySelectorAll('.play-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const shuffleBtn = document.querySelector('.shuffle-btn');
    const repeatBtn = document.querySelector('.repeat-btn');
    const progressBar = document.getElementById('progress');
    const mobileProgressBar = document.getElementById('mobile-progress');
    const currentTimeEl = document.querySelector('.current-time');
    const durationEl = document.querySelector('.duration');
    const volumeSlider = document.querySelector('.volume-slider');
    const themeToggle = document.querySelector('.theme-toggle');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const sidebarClose = document.querySelector('.sidebar-close');
    const mobileSongInfo = document.querySelector('.mobile-song-info');
    const closeMobileInfo = document.querySelector('.close-mobile-info');
    const songsList = document.getElementById('songs-list');
    const playlistTitle = document.getElementById('playlist-title');
    const playlistItems = document.querySelectorAll('.playlists li');
    const progressContainer = document.querySelector('.progress-bar-container');
    const mobileProgressContainer = document.querySelector('.mobile-progress-container .progress-bar-container');

    // Datos de ejemplo (reemplaza con tus archivos MP3)
    const songs = [
        {   //FILOSOFIA
            title: "El mar, el infinito y el poder de lo invisible",
            artist: "A la luz del pensar",
            cover: "images/a la luz del pensar.jpg",
            file: "music/filosofia/A la luz del pensar - El mar, el infinito y el poder de lo invisible.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "El secuestro de nuestro deseo: Reaprender a desear",
            artist: "A la luz del pensar",
            cover: "images/a la luz del pensar.jpg",
            file: "music/filosofia/A la luz del pensar - El secuestro de nuestro deseo_reaprender a desear.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "El tiempo del alma: La cadencia de la música",
            artist: "A la luz del pensar",
            cover: "images/a la luz del pensar.jpg",
            file: "music/filosofia/A la luz del pensar - El tiempo del alma_la cadencia de la música.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "Explorar los malestares desde lo colectivo",
            artist: "A la luz del pensar",
            cover: "images/a la luz del pensar.jpg",
            file: "music/filosofia/A la luz del pensar - Explorar los malestares desde lo colectivo.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "Giacomo Leopardi: entre el infinito y la nada",
            artist: "A la luz del pensar",
            cover: "images/a la luz del pensar.jpg",
            file: "music/filosofia/A la luz del pensar - Giacomo Leopardi_entre el infinito y la nada.mp3",
            playlist: ["podcasts", "filosofia"]
        },        
        {
            title: "La alegría del descubrimiento: seres en esbozo",
            artist: "A la luz del pensar",
            cover: "images/a la luz del pensar.jpg",
            file: "music/filosofia/A la luz del pensar - La alegría del descubrimiento_seres en esbozo.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "La colonización de la muerte",
            artist: "A la luz del pensar",
            cover: "images/a la luz del pensar.jpg",
            file: "music/filosofia/A la luz del pensar - La colonización de la muerte.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "La inagotable búsqueda de la belleza",
            artist: "A la luz del pensar",
            cover: "images/a la luz del pensar.jpg",
            file: "music/filosofia/A la luz del pensar - La inagotable búsqueda de la belleza.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "La inmarescible sabiduría de los antiguos",
            artist: "A la luz del pensar",
            cover: "images/a la luz del pensar.jpg",
            file: "music/filosofia/A la luz del pensar - La inmarescible sabiduría de los antiguos.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "Las emociones de las cosas",
            artist: "A la luz del pensar",
            cover: "images/a la luz del pensar.jpg",
            file: "music/filosofia/A la luz del pensar - Las emociones de las cosas.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "Qué decir del alma: Entre la palabra y el deseo",
            artist: "A la luz del pensar",
            cover: "images/a la luz del pensar.jpg",
            file: "music/filosofia/A la luz del pensar - Qué decir del alma_Entre la palabra y el deseo.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "Sin relato: La imposibilidad de decirnos",
            artist: "A la luz del pensar",
            cover: "images/a la luz del pensar.jpg",
            file: "music/filosofia/A la luz del pensar - Sin relato_la imposibilidad de decirnos.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "¿Por qué necesitamos chivos expiatorios?",
            artist: "EthicSound",
            cover: "images/ethicsound.jpg",
            file: "music/filosofia/EthicSound -  _Por qué necesitamos chivos expiatorios.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "El derecho a caer mal",
            artist: "EthicSound",
            cover: "images/ethicsound.jpg",
            file: "music/filosofia/EthicSound -  El derecho a caer mal.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "Haskala o la ilustración judía",
            artist: "EthicSound",
            cover: "images/ethicsound.jpg",
            file: "music/filosofia/EthicSound -  Haskala o la ilustración judía.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "Karl Popper y el sin sentido de la historia",
            artist: "EthicSound",
            cover: "images/ethicsound.jpg",
            file: "music/filosofia/EthicSound -  Karl Popper y el sin sentido de la historia.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "Mamá quiero ser artista y no morirme de hambre",
            artist: "EthicSound",
            cover: "images/ethicsound.jpg",
            file: "music/filosofia/EthicSound -  Mamá quiero ser artista y no morirme de hambre.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "¿Es demagógico prohibir los jets privados?",
            artist: "EthicSound",
            cover: "images/ethicsound.jpg",
            file: "music/filosofia/EthicSound - _Es demagógico prohibir los jets privados.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "¿Necesitan jugar los adultos?",
            artist: "EthicSound",
            cover: "images/ethicsound.jpg",
            file: "music/filosofia/EthicSound - _Necesitan jugar los adultos_.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "¿No quiere la Generación Z tener hijos?",
            artist: "EthicSound",
            cover: "images/ethicsound.jpg",
            file: "music/filosofia/EthicSound - _No quiere la Generación Z tener hijos_.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "¿Qué corrientes filosóficas imperan hoy?",
            artist: "EthicSound",
            cover: "images/ethicsound.jpg",
            file: "music/filosofia/EthicSound - _Qué corrientes filosóficas imperan hoy.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "¿Qué es un paraíso climático?",
            artist: "EthicSound",
            cover: "images/ethicsound.jpg",
            file: "music/filosofia/EthicSound - _Qué es un paraíso climático.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "¿Se hereda la ansiedad?",
            artist: "EthicSound",
            cover: "images/ethicsound.jpg",
            file: "music/filosofia/EthicSound - _Se hereda la ansiedad_.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "¿Aldous Huxley, el escritor del mundo feliz?",
            artist: "EthicSound",
            cover: "images/ethicsound.jpg",
            file: "music/filosofia/EthicSound - Aldous Huxley, el escritor del mundo feliz.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "Anna Ajmatova, la poetisa rusa que desafió al regimén de Stalin",
            artist: "EthicSound",
            cover: "images/ethicsound.jpg",
            file: "music/filosofia/EthicSound - Anna Ajmatova, la poetisa rusa que desafió al regimén de Stalin.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "Aristóteles y el principio de no contradicción",
            artist: "EthicSound",
            cover: "images/ethicsound.jpg",
            file: "music/filosofia/EthicSound - Aristóteles y el principio de no contradicción.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "Breve historia del chiste",
            artist: "EthicSound",
            cover: "images/ethicsound.jpg",
            file: "music/filosofia/EthicSound - Breve historia del chiste.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "Cómo y por qué El Dioni se convirtió en un héroe popular",
            artist: "EthicSound",
            cover: "images/ethicsound.jpg",
            file: "music/filosofia/EthicSound - Cómo y por qué El Dioni se convirtió en un héroe popular.mp3",
            playlist: ["podcasts", "filosofia"]
        },
        {
            title: "Cómo y por qué El Dioni se convirtió en un héroe popular",
            artist: "EthicSound",
            cover: "images/ethicsound.jpg",
            file: "music/filosofia/EthicSound - Cómo y por qué El Dioni se convirtió en un héroe popular.mp3",
            playlist: ["podcasts", "filosofia"]
        },  
        {   // GRAMATICA
            title: "Episodio 257. El imperativo con pronombres de complemento",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_257_El_imperativo_con_pronombres_de_complemento_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 256. El imperativo con verbos pronominales",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_256_El_imperativo_con_verbos_pronominales_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 255. El imperativo negativo",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_255_El_imperativo_negativo_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 254. El imperativo afirmativo",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_254_El_imperativo_afirmativo_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 253. Las oraciones superlativas",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_253_Las_oraciones_superlativas.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 252. Las oraciones comparativas",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_252_Las_oraciones_comparativas.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 251. Pretérito pluscuamperfecto de subjuntivo",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_251_Pret_rito_pluscuamperfecto_de_subjuntivo.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 250. Pretérito perfecto de subjuntivo",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_250_Pret_rito_perfecto_de_subjuntivo_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 249. Pretérito imperfecto de subjuntivo",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/episodio_GRAM_249_Pret_rito_imperfecto_de_subjuntivo_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 248. Excepciones del grupo de percepción y comunicación",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_248_Excepciones_del_grupo_de_percepci_n_y_comunicaci_n_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 247. Subjuntivo: percepción y comunicación",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_247_Subjuntivo_percepci_n_y_comunicaci_n_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 246. Subjuntivo: valoraciones y constataciones",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_246_Subjuntivo_valoraciones_y_constataciones_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 245. Subjuntivo: sentimientos, deseos e influencias",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_245_Subjuntivo_sentimientos_deseos_e_influencia_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 244. Subjuntivo: tres grupos clave",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_244_Subjuntivo_tres_grupos_clave_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 243. La colocación de los adjetivos",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_243_La_colocaci_n_de_los_adjetivos_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 242. El número: singular y plural",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_242_El_n_mero_singular_y_plural_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 241. El género #2",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_241_El_g_nero_2_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 240. El género",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_240_GRAM_El_g_nero_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 239. El participio",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_239_El_participio_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 238. El gerundio",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_238_El_gerundio_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 237. Otros usos del futuro",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_237_Otros_usos_del_futuro_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 236. Otros usos del pretérito imperfecto",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_236_Otros_usos_del_pret_rito_imperfecto_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 235. Otros usos del presente",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_235_Otros_usos_del_presente_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 234. Ser y estar con adjetivos #2",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_234_Ser_y_estar_con_adjetivos_2_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 233. Ser y estar con adjetivos",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_233_Ser_y_estar_con_adjetivos_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 232. Verbos que cambian de significado #2",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_232_Verbos_que_cambian_de_significado_2_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 231. Verbos que cambian de significado",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_231_Verbos_que_cambian_de_significado_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 230. Verbos que cambio: quedarse, convertise, llegar a ser",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_230_Verbos_de_cambio_quedarse_convertirse_llegar_a_ser_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 229. Verbos que cambio: hacerse, volverse, ponerse",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_229_Verbos_de_cambio_hacerse_volverse_ponerse_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 228. Nexos condicionales con subjuntivo #2",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_228_Nexos_condicionales_con_subjuntivo_2_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 227. Nexos condicionales con subjuntivo",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_227_Nexos_condicionales_con_subjuntivo_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 226. Nexos condicionales con infinitivo",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_226_Nexos_condicionales_con_infinitivo_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 225. Oraciones condicionales con subjuntivo",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_225_Oraciones_condicionales_con_subjuntivo_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 224. Oraciones condicionales con el indicativo",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_224_Oraciones_condicionales_con_el_indicativo_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 223. Oraciones finales",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_223_Oraciones_finales_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 222. Oraciones temporales: otros nexos #2",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_222_Oraciones_temporales_otros_nexos_2_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 221. Oraciones temporales: otros nexos",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_221_Oraciones_temporales_otros_nexos_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 220. Oraciones temporales: antes o después",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_220_Oraciones_temporales_antes_o_despu_s_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 219. Oraciones temporales: cuando",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_219_Oraciones_temporales_cuando_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 218. El subjuntivo para expresar indeterminación #2",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_218_El_subjuntivo_para_expresar_indeterminaci_n_2_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 217. El subjuntivo para expresar indeterminación",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_217_El_subjuntivo_para_expresar_indeterminaci_n_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 216. Expresar aprobación y determinación",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_216_Expresar_aprobaci_n_y_desaprobaci_n_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 215. Excepción de los verbos de opinión",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_215_Excepciones_de_los_verbos_de_opini_n_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 214. Pedir valoración",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_214_Pedir_valoraci_n_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 213. Dar la opinión",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_213_Dar_la_opini_n_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 212. Expresar falta de certeza y evidencia",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_212_Expresar_falta_de_certeza_y_evidencia_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 211. Expresar certeza y evidencia",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_211_Expresar_certeza_y_evidencia_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 210. Expresar arrepentimiento",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_210_Expresar_arrepentimiento_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 209. Expresar decepción",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_209_Expresar_decepci_n_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 208. Preguntar por planes",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_208_Preguntar_por_planes_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 207. Expresar nerviosismo",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_207_Expresar_nerviosismo_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 206. Expresar enfado e indignación",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_206_Expresar_enfado_e_indignaci_n_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 205. Expresar hartazgo",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_205_Expresar_hartazgo_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 204. Expresar tristeza",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_204_Expresar_tristeza_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 203. Preguntar por deseos",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_203_Preguntar_por_deseos_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 202. Ofrecer e invitar",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_202_Ofrecer_e_invitar_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 201. Dar y denegar permiso",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_201_Dar_y_denegar_permiso_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },
        {   
            title: "Episodio 200. Pedir permiso",
            artist: "Hoy Hablamos Gramática",
            cover: "images/hoyhablamos.jpg",
            file: "music/gramatica/Episodio_GRAM_200_Pedir_permiso_mezcla.mp3",
            playlist: ["podcasts", "gramatica"]
        },  
        {   //LITERARIO
            title: "Las noches blancas",
            artist: "Entrevista a Mario Vargas Llosa",
            cover: "images/mariovargasllosa.png",
            file: "music/literario/Entrevista a Mario Vargas Llosa - Las noches blancas.mp3",
            playlist: ["podcasts", "literario"]
        },
        {
            title: "Las noches blancas",
            artist: "El origen del Cristianismo",
            cover: "images/podcast1.jpg",
            file: "music/literario/El origen del Cristianismo - Las noches blancas.mp3",
            playlist: ["podcasts", "literario"]
        },
        {
            title: "La belleza de pensar",
            artist: "Entrevista a Roberto Bolaño",
            cover: "images/robertobolano.jpg",
            file: "music/literario/Entrevista a Roberto Bolaño - La belleza de pensar.mp3",
            playlist: ["podcasts", "literario"]
        },
        {
            title: "Encuentro con las letras",
            artist: "Entrevista a Julio Cortázar",
            cover: "images/juliocortazar.png",
            file: "music/literario/Entrevista a Julio Cortázar - Encuentro con las letras.mp3",
            playlist: ["podcasts", "literario"]
        },
        {
            title: "Encuentro con las letras",
            artist: "Entrevista a Susan Sontag",
            cover: "images/susansontag.png",
            file: "music/literario/Entrevista a Susan Sontag - Encuentro con las letras.mp3",
            playlist: ["podcasts", "literario"]
        },
        {
            title: "Hoy por hoy",
            artist: "Entrevista a Gabriel García Marquez",
            cover: "images/gabrielgarciamarquez.jpg",
            file: "music/literario/Entrevista a Gabriel Garcia Marquez - Hoy por Hoy.mp3",
            playlist: ["podcasts", "literario"]
        },
        {   //PSICOLOGICO
            title: "Condenados por un algoritmo",
            artist: "La cuadratura del circulo",
            cover: "images/la cuadratura del circulo.jpg",
            file: "music/psicologico/La cuadratura del circulo - Condenados por un algoritmo.mp3",
            playlist: ["podcasts", "psicologico"]
        },
        {   
            title: " La era del vacío: Narcisistas e individualistas",
            artist: "La cuadratura del circulo",
            cover: "images/la cuadratura del circulo.jpg",
            file: "music/psicologico/La cuadratura del circulo - La era del vacío_Narcisistas e individualistas.mp3",
            playlist: ["podcasts", "psicologico"]
        },
        {   
            title: " La serenidad de la aceptación",
            artist: "La cuadratura del circulo",
            cover: "images/la cuadratura del circulo.jpg",
            file: "music/psicologico/La cuadratura del circulo - La serenidad de la aceptación.mp3",
            playlist: ["podcasts", "psicologico"]
        },
        {   
            title: " Metamorfosis",
            artist: "La cuadratura del circulo",
            cover: "images/la cuadratura del circulo.jpg",
            file: "music/psicologico/La cuadratura del circulo - Metamorfosis.mp3",
            playlist: ["podcasts", "psicologico"]
        },
        {   
            title: " Taoísmo, los opuestos que se necesitan",
            artist: "La cuadratura del circulo",
            cover: "images/la cuadratura del circulo.jpg",
            file: "music/psicologico/La cuadratura del circulo - Taoísmo, los opuestos que se necesitan.mp3",
            playlist: ["podcasts", "psicologico"]
        },
        {   // AL HILO
            title: "Mi Balcon",
            artist: "Vicente García",
            cover: "images/Vicente García - Mi Balcon.jpg",
            file: "music/Vicente García - Mi Balcon.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {   
            title: "Hong Kong",
            artist: "C. Tangana, Andrés Calamaro",
            cover: "images/C. Tangana, Andrés Calamaro - Hong Kong.jpg",
            file: "music/C. Tangana, Andrés Calamaro - Hong Kong.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {   
            title: "Los Tontos",
            artist: "C. Tangana",
            cover: "images/Los Tontos - C. Tangana.jpg",
            file: "music/Los Tontos - C. Tangana.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {   
            title: "Comerte Entera",
            artist: "C. Tangana ft. Toquinho",
            cover: "images/C. Tangana ft. Toquinho - Comerte Entera.jpg",
            file: "music/C. Tangana ft. Toquinho - Comerte Entera.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {   
            title: "Amor y Guitarra",
            artist: "Joaco Burgos",
            cover: "images/Joaco Burgos - Amor y Guitarra.jpg",
            file: "music/Joaco Burgos - Amor y Guitarra.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {   
            title: "Frenesí",
            artist: "Joaco Burgos",
            cover: "images/Joaco Burgos - Frenesí.jpg",
            file: "music/Joaco Burgos - Frenesí.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {   
            title: "Mi Fiesta",
            artist: "Bandalos Chinos",
            cover: "images/Bandalos Chinos - Mi Fiesta.jpg",
            file: "music/Bandalos Chinos - Mi Fiesta.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "Demasiado",
            artist: "Bandalos Chinos",
            cover: "images/Demasiado-Bandalos Chinos.jpg",
            file: "music/Demasiado-Bandalos Chinos.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "Sin Señal",
            artist: "Bandalos Chinos",
            cover: "images/Bandalos Chinos - Sin Señal.jpg",
            file: "music/Bandalos Chinos - Sin Señal.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "Súper V",
            artist: "Bandalos Chinos",
            cover: "images/Súper V - Bandalos Chinos.jpg",
            file: "music/Súper V - Bandalos Chinos.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {   
            title: "Y es bonito",
            artist: "Hey Kid, Paul Alone",
            cover: "images/Hey Kid, Paul Alone - Y es bonito.jpg",
            file: "music/Hey Kid, Paul Alone - Y es bonito.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {   
            title: "Quería",
            artist: "Paul Alone",
            cover: "images/Paul Alone - Quería.jpg",
            file: "music/Paul Alone - Quería.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "Bossa & People",
            artist: "El Kuelgue",
            cover: "images/El Kuelgue - Bossa & People.jpg",
            file: "music/El Kuelgue - Bossa & People.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "Circunvalación",
            artist: "El Kuelgue",
            cover: "images/El Kuelgue - Circunvalación.jpg",
            file: "music/El Kuelgue - Circunvalación.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "Parque Acuático",
            artist: "El Kuelgue",
            cover: "images/El Kuelgue - Parque Acuático.jpg",
            file: "music/El Kuelgue - Parque Acuático.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "La Declaración",
            artist: "El Zar",
            cover: "images/EL ZAR - LA DECLARACIÓN.jpg",
            file: "music/EL ZAR - LA DECLARACIÓN.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "Fuego Contra Fuego",
            artist: "Indios",
            cover: "images/Indios - Fuego Contra Fuego.jpg",
            file: "music/Indios - Fuego Contra Fuego.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "Chachachá",
            artist: "Jósean Log",
            cover: "images/Jósean Log - Chachachá.jpg",
            file: "music/Jósean Log - Chachachá.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "Beso",
            artist: "Jósean Log",
            cover: "images/Jósean Log - Beso.jpg",
            file: "music/Jósean Log - Beso.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "Doma",
            artist: "Jósean Log",
            cover: "images/Jósean Log - Doma.jpg",
            file: "music/Jósean Log - Doma.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "Pruébame a Ti",
            artist: "Jósean Log",
            cover: "images/Jósean Log - Pruébame a Ti.jpg",
            file: "music/Jósean Log - Pruébame a Ti.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "Brillas",
            artist: "León Larregui",
            cover: "images/León Larregui - Brillas.jpg",
            file: "music/León Larregui - Brillas.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "Locos",
            artist: "León Larregui",
            cover: "images/León Larregui - Locos.jpg",
            file: "music/León Larregui - Locos.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "La Distancia",
            artist: "Manuel Medrano",
            cover: "images/Manuel Medrano - La Distancia.jpg",
            file: "music/Manuel Medrano - La Distancia.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "No van a parar",
            artist: "Peces Raros",
            cover: "images/No van a parar - Peces Raros.jpg",
            file: "music/No van a parar - Peces Raros.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "A Mí",
            artist: "Rels B",
            cover: "images/Rels B - A Mí.jpg",
            file: "music/Rels B - A Mí.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "NO CAP",
            artist: "Trueno",
            cover: "images/Trueno - NO CAP.jpg",
            file: "music/Trueno - NO CAP.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "OHH BABY",
            artist: "Trueno",
            cover: "images/Trueno - OHH BABY.jpg",
            file: "music/Trueno - OHH BABY.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "TRANKY FUNKY",
            artist: "Trueno",
            cover: "images/Trueno - TRANKY FUNKY.jpg",
            file: "music/Trueno - TRANKY FUNKY.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "EN LA CITY",
            artist: "Trueno, Young Miko",
            cover: "images/Trueno, Young Miko - EN LA CITY.jpg",
            file: "music/Trueno, Young Miko - EN LA CITY.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "ALMA DINAMITA",
            artist: "WOS",
            cover: "images/WOS - ALMA DINAMITA.jpg",
            file: "music/WOS - ALMA DINAMITA.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "ANDROMEDA",
            artist: "WOS",
            cover: "images/WOS - ANDROMEDA.jpg",
            file: "music/WOS - ANDROMEDA.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "ARRANCARMELO",
            artist: "WOS",
            cover: "images/WOS - ARRANCARMELO.jpg",
            file: "music/WOS - ARRANCARMELO.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "Okupa",
            artist: "WOS",
            cover: "images/WOS - Okupa.jpg",
            file: "music/WOS - Okupa.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "Kilometros",
            artist: "Ainda, Bandalos Chinos",
            cover: "images/Ainda, Bandalos Chinos - Kilometros.jpg",
            file: "music/Ainda, Bandalos Chinos - Kilometros.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {
            title: "Departamento",
            artist: "Bandalos Chinos ft. Adan Jodorowsky",
            cover: "images/Bandalos Chinos ft. Adan Jodorowsky - Departamento.jpg",
            file: "music/Bandalos Chinos ft. Adan Jodorowsky - Departamento.mp3",
            playlist: ["songs", "al-hilo"]
        },
        {   // MILLENIAL
            title: "Dicen",
            artist: "Jarabe de Palo",
            cover: "images/Dicen - Jarabe de Palo.jpg",
            file: "music/Dicen - Jarabe de Palo.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Romeo y Julieta",
            artist: "Jarabe de Palo",
            cover: "images/Romeo y Julieta - Jarabe de Palo.jpg",
            file: "music/Romeo y Julieta - Jarabe de Palo.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Depende",
            artist: "Jarabe de Palo",
            cover: "images/Depende - Jarabe de Palo.jpg",
            file: "music/Depende - Jarabe de Palo.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Grita",
            artist: "Jarabe de Palo",
            cover: "images/Grita - Jarabe de Palo.jpg",
            file: "music/Grita - Jarabe de Palo.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "El universo sobre mí",
            artist: "Amaral",
            cover: "images/El universo sobre mí - Amaral.jpg",
            file: "music/El universo sobre mí - Amaral.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Marta, Sebas, Guille y los demás",
            artist: "Amaral",
            cover: "images/Marta, Sebas, Guille y los demás - Amaral.jpg",
            file: "music/Marta, Sebas, Guille y los demás - Amaral.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Yendo a la casa de Damian",
            artist: "Cuarteto de Nos",
            cover: "images/Yendo a la casa de Damian - Cuarteto de Nos.jpg",
            file: "music/Yendo a la casa de Damian - Cuarteto de Nos.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Zapatillas",
            artist: "El Canto del Loco",
            cover: "images/Zapatillas - El Canto del Loco.jpg",
            file: "music/Zapatillas - El Canto del Loco.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "No puedo vivir sin ti",
            artist: "El Canto del Loco",
            cover: "images/No puedo vivir sin ti - El Canto del Loco.jpg",
            file: "music/No puedo vivir sin ti - El Canto del Loco.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Atrapados en la red",
            artist: "Tam Tam Go!",
            cover: "images/Atrapados en la red - Tam Tam Go!.jpg",
            file: "music/Atrapados en la red - Tam Tam Go!.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Me muero",
            artist: "La Quinta Estación",
            cover: "images/Me Muero - La Quinta Estación.jpg",
            file: "music/Me Muero - La Quinta Estación.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Algo más",
            artist: "La Quinta Estación",
            cover: "images/Algo más - La Quinta Estación.jpg",
            file: "music/Algo más - La Quinta Estación.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Me haces bien",
            artist: "Jorge Drexler",
            cover: "images/Me haces bien - Jorge Drexler.jpg",
            file: "music/Me haces bien - Jorge Drexler.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "La edad del cielo",
            artist: "Jorge Drexler",
            cover: "images/La edad del cielo - Jorge Drexler.jpg",
            file: "music/La edad del cielo - Jorge Drexler.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Todo se transforma",
            artist: "Jorge Drexler",
            cover: "images/Todo se transforma - Jorge Drexler.jpg",
            file: "music/Todo se transforma - Jorge Drexler.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Flaca",
            artist: "Andrés Calamaro",
            cover: "images/Flaca - Andrés Calamaro.jpg",
            file: "music/Flaca - Andrés Calamaro.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Loco",
            artist: "Andrés Calamaro",
            cover: "images/Loco - Andrés Calamaro.jpg",
            file: "music/Loco - Andrés Calamaro.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Antonia",
            artist: " Gondwana",
            cover: "images/Antonia - Gondwana.jpg",
            file: "music/Antonia - Gondwana.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Felicidad",
            artist: " Gondwana",
            cover: "images/Felicidad - Gondwana.jpg",
            file: "music/Felicidad - Gondwana.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Momento",
            artist: "Los Cafres",
            cover: "images/Momento - Los Cafres.jpg",
            file: "music/Momento - Los Cafres.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Aire",
            artist: "Los Cafres",
            cover: "images/Aire - Los Cafres.jpg",
            file: "music/Aire - Los Cafres.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Casi que me pierdo",
            artist: "Los Cafres",
            cover: "images/Casi q' me pierdo - Los cafres.jpg",
            file: "music/Casi q' me pierdo - Los cafres.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Pupilas Lejanas",
            artist: "Los Pericos",
            cover: "images/Pupilas Lejanas - Los Pericos.jpg",
            file: "music/Pupilas Lejanas - Los Pericos.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Baracunatana",
            artist: "Aterciopelados",
            cover: "images/Baracunatana - Aterciopelados.jpg",
            file: "music/Baracunatana - Aterciopelados.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Algo está cambiando",
            artist: "Julieta Venegas",
            cover: "images/Julieta Venegas - Algo Está Cambiando.jpg",
            file: "music/Julieta Venegas - Algo Está Cambiando.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Caraluna",
            artist: "Bacilos",
            cover: "images/Bacilos - Caraluna.jpg",
            file: "music/Bacilos - Caraluna.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Bonita",
            artist: "Cabas",
            cover: "images/Bonita - Cabas.jpg",
            file: "music/Bonita - Cabas.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Tu Boca",
            artist: "Cabas",
            cover: "images/Cabas - Tu Boca.jpg",
            file: "music/Cabas - Tu Boca.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Eres",
            artist: "Café Tacuba",
            cover: "images/Eres - Café Tacuba.jpg",
            file: "music/Eres - Café Tacuba.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "París",
            artist: "La Oreja de Van Gogh",
            cover: "images/Paris - La Oreja de Van Gogh.jpg",
            file: "music/Paris - La Oreja de Van Gogh.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Día Cero",
            artist: "La Ley",
            cover: "images/La Ley - Día Cero.jpg",
            file: "music/La Ley - Día Cero.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Ella Usó Mi Cabeza Como un Revólver",
            artist: "Soda Stereo",
            cover: "images/Soda Stereo - Ella Usó Mi Cabeza Como un Revólver.jpg",
            file: "music/Soda Stereo - Ella Usó Mi Cabeza Como un Revólver.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Frijolero",
            artist: "Molotov",
            cover: "images/Frijolero - Molotov.jpg",
            file: "music/Frijolero - Molotov.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Gimme The Power",
            artist: "Molotov",
            cover: "images/Gimme Tha Power - Molotov.jpg",
            file: "music/Gimme Tha Power - Molotov.mp3",
            playlist: ["songs", "millenials"]
        },
        {
            title: "Por qué no se van",
            artist: "Los Prisioneros",
            cover: "images/Los Prisioneros - Por qué no se van.jpg",
            file: "music/Los Prisioneros - Por qué no se van.mp3",
            playlist: ["songs", "millenials"]
        },
        {   //Lentas
            title: "A tientas",
            artist: "Duncan Dhu",
            cover: "images/A tientas - Duncan Dhu.jpg",
            file: "music/A tientas - Duncan Dhu.mp3",
            playlist: ["songs", "lentas"]
        },
        {
            title: "Sin Aliento",
            artist: "Danza Invisible",
            cover: "images/Sin aliento - Danza Invisible.jpg",
            file: "music/Sin aliento - Danza Invisible.mp3",
            playlist: ["songs", "lentas"]
        },
        {
            title: "Es Por Ti",
            artist: "Complices",
            cover: "images/Complices - Es Por Ti.jpg",
            file: "music/Complices - Es Por Ti.mp3",
            playlist: ["songs", "lentas"]
        },
        {
            title: "La Chica de Humo",
            artist: "Emmanuel",
            cover: "images/La Chica de Humo - Emmanuel.jpg",
            file: "music/La Chica de Humo - Emmanuel.mp3",
            playlist: ["songs", "lentas"]
        },
        {
            title: "Tú por mí",
            artist: "Christina y Los Subterraneos",
            cover: "images/Tú por mí - Christina y Los Subterraneos.jpg",
            file: "music/Tú por mí - Christina y Los Subterraneos.mp3",
            playlist: ["songs", "lentas"]
        },
        {
            title: "Por Amor",
            artist: "Marcos Llunas",
            cover: "images/Marcos Llunas - Por Amor.jpg",
            file: "music/Marcos Llunas - Por Amor.mp3",
            playlist: ["songs", "lentas"]
        },
        {
            title: "Quisiera ser",
            artist: "Alejandro Sanz",
            cover: "images/Quisiera ser - Alejandro Sanz.jpg",
            file: "music/Quisiera ser - Alejandro Sanz.mp3",
            playlist: ["songs", "lentas"]
        },
        {
            title: "Y sólo se me ocurre amarte",
            artist: "Alejandro Sanz",
            cover: "images/Y sólo se me ocurre amarte - Alejandro Sanz.jpg",
            file: "music/Y sólo se me ocurre amarte - Alejandro Sanz.mp3",
            playlist: ["songs", "lentas"]
        },
        {
            title: "El alma al aire",
            artist: "Alejandro Sanz",
            cover: "images/El alma al aire - Alejandro Sanz.jpg",
            file: "music/El alma al aire - Alejandro Sanz.mp3",
            playlist: ["songs", "lentas"]
        },
        {
            title: "No es lo mismo",
            artist: "Alejandro Sanz",
            cover: "images/No es lo mismo - Alejandro Sanz.jpg",
            file: "music/No es lo mismo - Alejandro Sanz.mp3",
            playlist: ["songs", "lentas"]
        },
        {
            title: "Amiga mía",
            artist: "Alejandro Sanz",
            cover: "images/Amiga mía - Alejandro Sanz.jpg",
            file: "music/Amiga mía - Alejandro Sanz.mp3",
            playlist: ["songs", "lentas"]
        },
        {
            title: "Suave",
            artist: "Luis Miguel",
            cover: "images/Luis Miguel - Suave.jpg",
            file: "music/Luis Miguel - Suave.mp3",
            playlist: ["songs", "lentas"]
        },
        {
            title: "Sabor a mí",
            artist: "Luis Miguel",
            cover: "images/Sabor a mi - Luis Miguel.jpg",
            file: "music/Sabor a mi - Luis Miguel.mp3",
            playlist: ["songs", "lentas"]
        },
        {
            title: "Morena mía",
            artist: "Miguel Bosé",
            cover: "images/Morena mía - Miguel Bosé.jpg",
            file: "music/Morena mía - Miguel Bosé.mp3",
            playlist: ["songs", "lentas"]
        },
        {
            title: "Bachata Rosa",
            artist: "Juan Luis Guerra",
            cover: "images/Bachata Rosa - Juan Luis Guerra.jpg",
            file: "music/Bachata Rosa - Juan Luis Guerra.mp3",
            playlist: ["songs", "lentas"]
        },
        {
            title: "El ataque de las chicas cocodrilo",
            artist: "Hombres G",
            cover: "images/El ataque de las chicas cocodrilo - Hombres G.jpg",
            file: "music/El ataque de las chicas cocodrilo - Hombres G.mp3",
            playlist: ["songs", "lentas"]
        },
        //Juergas
        {
            title: "Capaz",
            artist: "Alleh, Yorghaki",
            cover: "images/Alleh, Yorghaki - capaz.jpg",
            file: "music/Alleh, Yorghaki - capaz.mp3",
            playlist: ["songs", "juergas"]
        },
        {
            title: "BUBALU",
            artist: "Feid, Rema",
            cover: "images/Feid, Rema - BUBALU.jpg",
            file: "music/Feid, Rema - BUBALU.mp3",
            playlist: ["songs", "juergas"]
        },
        {
            title: "FERXXO 151",
            artist: "Feid",
            cover: "images/Feid - FERXXO 151.jpg",
            file: "music/Feid - FERXXO 151.mp3",
            playlist: ["songs", "juergas"]
        },
        {
            title: "Me Rehúso",
            artist: "Danny Ocean",
            cover: "images/Danny Ocean -  Me Rehúso.jpg",
            file: "music/Danny Ocean -  Me Rehúso.mp3",
            playlist: ["songs", "juergas"]
        },
        {
            title: "PROVENZA",
            artist: "Karol G",
            cover: "images/PROVENZA - Karol G.jpg",
            file: "music/PROVENZA - Karol G.mp3",
            playlist: ["songs", "juergas"]
        },
        {
            title: "Bad Bunny",
            artist: "Moscow Mule",
            cover: "images/Bad Bunny - Moscow Mule.jpg",
            file: "music/Bad Bunny - Moscow Mule.mp3",
            playlist: ["songs", "juergas"]
        },  
        {
            title: "Si antes te hubiera conocido",
            artist: "Karol G",
            cover: "images/Karol G - Si antes te hubiera conocido.jpg",
            file: "music/Karol G - Si antes te hubiera conocido.mp3",
            playlist: ["songs", "juergas"]
        },

    ];

    // Variables de estado
    let currentSongIndex = 0;
    let isPlaying = false;
    let isShuffled = false;
    let isRepeated = false;
    let isDarkMode = true;
    let currentPlaylist = [...songs];
    let originalPlaylistOrder = [...songs];

// ==============================================
// MANEJO ESPECÍFICO PARA iOS - INICIO
// ==============================================
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (isIOS) {
    const audioElement = document.getElementById('audio-player');
    
    // Manejar pausa automática en iOS al minimizar
    document.addEventListener('pause', () => {
        if (window.isPlaying && document.visibilityState === 'hidden') {
            audioElement.pause();
        }
    }, true);
    
    // Reanudar al volver a la aplicación
    document.addEventListener('visibilitychange', () => {
        const audioElement = document.getElementById('audio-player');
  
        if (document.visibilityState === 'hidden') {
          // 1. Cuando la app entra en segundo plano
          if (isPlaying) {
            updateServiceWorkerPlaybackState(); // Informar al Service Worker
          }
        } else {
          // 2. Cuando la app vuelve a primer plano (para iOS)
          if (window.isPlaying) {
            audioElement.play().catch(e => {
              console.log('iOS Auto-reanudar falló:', e);
              // Intentar nuevamente con gesto de usuario
              const playHandler = () => {
                audioElement.play()
                  .then(() => {
                    updateServiceWorkerPlaybackState(); // Actualizar estado después de reanudar
                    document.removeEventListener('click', playHandler);
                  })
                  .catch(e => console.log('Error al reanudar:', e));
              };
              document.addEventListener('click', playHandler);
            });
          }
        }
    });
    
    // Solución para autoplay bloqueado
    document.addEventListener('play', function() {
        audioElement.play().catch(e => console.log('Autoplay prevenido en iOS:', e));
    }, true);
}
// ==============================================
// MANEJO ESPECÍFICO PARA iOS - FIN
// ==============================================

    // Sidebar
    function setupSidebar() {
        // Sidebar
        sidebarToggle.addEventListener('click', () => { //Toggle del sidebar
            const isOpening = !sidebar.classList.contains('active');
            
            // Alternar clases
            sidebar.classList.toggle('active');
            document.querySelector('.main-container').classList.toggle('sidebar-open');
            
            // No bloquear scroll del body cuando se abre
            document.body.style.overflow = 'auto'; // ← Esto permite scroll
            
            // Opcional: Cerrar otros elementos abiertos (ej: mobile song info)
            if (isOpening) {
                sidebar.style.overflowY = 'auto'; // Scroll solo en sidebar
                mobileSongInfo?.classList.remove('active');
            }
        });
        
        const closeSidebar = () => { // Cerrar sidebar
            sidebar.classList.remove('active');
            document.querySelector('.main-container').classList.remove('sidebar-open');
            document.body.style.overflow = ''; //Scroll
        };

        sidebarClose.addEventListener('click', closeSidebar); // Botón de cierre
        
        document.addEventListener('click', (e) => { // Cerrar sidebar al hacer clic fuera (opcional)
            if (sidebar.classList.contains('active') && 
                !e.target.closest('.sidebar') && 
                !e.target.closest('.sidebar-toggle')) {
                closeSidebar();
            }
        });
        
        window.addEventListener('resize', () => { // Cerrar sidebar al cambiar tamaño de pantalla
            if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
                closeSidebar();
            }
        });

        function adjustSongGrid() {
            const width = window.innerWidth;
            const songsList = document.getElementById('songs-list');
            
            if (width >= 992) {
                songsList.style.gridTemplateColumns = 'repeat(auto-fill, minmax(180px, 1fr))';
            } else if (width >= 768) {
                songsList.style.gridTemplateColumns = 'repeat(auto-fill, minmax(160px, 1fr))';
            } else if (width >= 576) {
                songsList.style.gridTemplateColumns = 'repeat(auto-fill, minmax(140px, 1fr))';
            } else {
                songsList.style.gridTemplateColumns = 'repeat(auto-fill, minmax(120px, 1fr))';
            }
        }

        // Llama esta función cuando:
        document.addEventListener('DOMContentLoaded', function() {
            adjustSongGrid(); // Al cargar
            window.addEventListener('resize', adjustSongGrid); // Al redimensionar
        });
    }

    // ==============================================
    // CHAT GPT INTEGRATION - INICIO
    // ==============================================

    // Configurar el chat
    function setupChat() {
        // 1. Configuración inicial
        const chatContainer = document.getElementById('chat-container');
        const chatMessages = document.getElementById('chat-messages');
        const userMessageInput = document.getElementById('user-message');
        const sendMessageBtn = document.getElementById('send-message');
        const backToMusicBtn = document.querySelector('.back-to-music');
        const chatMenuItem = document.querySelector('.playlists li[data-playlist="chat"]');
        
        // 2. Configuración segura de la API Key (en producción usa variables de entorno)
        const OPENAI_API_KEY = "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"; // 🔒 Reemplaza con tu key real
        const API_MODEL = "gpt-4o-mini"; // Usa "gpt-3.5-turbo" si es otro modelo
    
        // 3. Mostrar/ocultar chat (mejorado)
        chatMenuItem.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Solo permitir abrir el chat si no estamos en modo desktop o si es el ítem específico
            if (window.innerWidth <= 768 || this.dataset.playlist === 'chat') {
                toggleChat();
            }
        });
    
        const toggleChat = () => {
            const chatContainer = document.getElementById('chat-container');
            const isMobile = window.innerWidth <= 768;
            const isOpening = !chatContainer.classList.contains('active');
            
            chatContainer.classList.toggle('active');
            document.body.classList.toggle('chat-open');
            
            if (isMobile) {
                document.querySelector('.sidebar')?.classList.remove('active');
                document.querySelector('.main-container')?.classList.remove('sidebar-open');
                document.body.style.overflow = isOpening ? 'hidden' : 'auto';
                
                // Ajustar visibilidad del main content
                document.querySelector('.main-container').style.opacity = isOpening ? '1' : '1';
                document.querySelector('.main-container').style.pointerEvents = isOpening ? 'none' : 'auto';

                // Asegurar que el chat sea completamente interactivo
                chatContainer.style.opacity = '1';
                chatContainer.style.pointerEvents = 'auto';
                        
                // Cierra el sidebar completamente cuando el chat está activo
                if (isOpening) {
                    document.querySelector('.sidebar').style.display = 'hidden';
                } else {
                    document.querySelector('.sidebar').style.display = 'visible';
                }
            } else {
                // En desktop, ajustar el margen derecho del main content
                document.querySelector('.main-container').style.marginRight = isOpening ? '350px' : '0';
            }
            
            // Auto-enfocar el input al abrir
            if (isOpening) {
                setTimeout(() => {
                    userMessageInput.focus();
                    // Asegurar que el input sea operable
                    userMessageInput.style.pointerEvents = 'auto';
                    userMessageInput.parentElement.style.pointerEvents = 'auto';
                }, 100);
            }
        };
    
        // 4. Eventos mejorados
        backToMusicBtn.addEventListener('click', toggleChat);
        
        userMessageInput.addEventListener('keypress', async (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                await sendMessage();
            }
        });
    
        sendMessageBtn.addEventListener('click', async () => {
            await sendMessage();
        });
    
        // 5. Función de enviar mensaje (optimizada)
        async function sendMessage() {
            const message = userMessageInput.value.trim();
            if (!message) return;
            
            addMessage(message, 'user');
            userMessageInput.value = '';
            userMessageInput.disabled = true;
            sendMessageBtn.disabled = true;
            
            const typingIndicator = addMessage('Escribiendo...', 'bot');
            
            try {
                const response = await generateBotResponse(message);
                typingIndicator.remove();
                addMessage(response, 'bot');
            } catch (error) {
                typingIndicator.remove();
                addMessage("Error al procesar tu pregunta. Por favor intenta nuevamente.", 'bot');
                console.error("Error en sendMessage:", error);
            } finally {
                userMessageInput.disabled = false;
                sendMessageBtn.disabled = false;
                userMessageInput.focus();
            }
        }
    
        // 6. Función mejorada para la API (con manejo de errores robusto)
        async function generateBotResponse(userMessage) {
            try {
                if (!OPENAI_API_KEY.startsWith('sk-')) {
                    throw new Error("API Key inválida");
                }
    
                const startTime = performance.now();
                
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${OPENAI_API_KEY}`
                    },
                    body: JSON.stringify({
                        model: API_MODEL,
                        messages: [
                            {
                                role: "system",
                                content: "Eres un tutor de español profesional. Responde de forma clara y concisa (máximo 150 palabras)."
                            },
                            {
                                role: "user",
                                content: userMessage
                            }
                        ],
                        temperature: 0.7,
                        max_tokens: 200,
                        stream: false // Importante para respuestas JSON
                    }),
                    signal: AbortSignal.timeout(10000) // Timeout de 10 segundos
                });
    
                if (!response.ok) {
                    const errorData = await response.json().catch(() => null);
                    throw new Error(errorData?.error?.message || `HTTP ${response.status}`);
                }
    
                const data = await response.json();
                const elapsedTime = ((performance.now() - startTime)/1000).toFixed(2);
                console.log(`Respuesta recibida en ${elapsedTime}s`);
                
                return data.choices[0]?.message?.content?.trim() || "No se pudo generar respuesta";
                
            } catch (error) {
                console.error("Error en generateBotResponse:", {
                    error: error.message,
                    model: API_MODEL,
                    timestamp: new Date().toISOString()
                });
                throw error;
            }
        }
    
        // 7. Función auxiliar para mensajes
        function addMessage(text, sender) {
            const messageElement = document.createElement('div');
            messageElement.className = `message ${sender}-message`;
            
            // Soporte para saltos de línea
            messageElement.innerHTML = text.replace(/\n/g, '<br>');
            
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTo({
                top: chatMessages.scrollHeight,
                behavior: 'smooth'
            });
            
            return messageElement;
        }
    
        // 8. Mensaje de bienvenida (mejorado)
        setTimeout(() => {
            addMessage('¡Hola Marianna! Soy tu tutor de español. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre gramática, vocabulario o cualquier duda sobre el idioma.', 'bot');
            // setTimeout(() => {
            //     addMessage('• Gramática\n• Vocabulario\n• Cultura hispana\n• Ejercicios prácticos', 'bot');
            // }, 300);
        }, 500);
    }

    // Inicialización
    function initPlayer() {
        setupSidebar();
        // Limpiar estado viejo al iniciar
        clearStalePlaybackState();
        // Configurar buscador
        const searchInput = document.querySelector('.search-bar input');
        searchInput.addEventListener('input', searchSongs);
        searchInput.addEventListener('focus', () => {
            // Guardar el estado actual antes de buscar
            savePlaybackState();
        });

        // Configurar botón expandir móvil
        const expandBtn = document.getElementById('expand-mobile-btn');
        const mobileSongInfo = document.querySelector('.mobile-song-info');
        
        if (expandBtn && mobileSongInfo) {
            expandBtn.addEventListener('click', function() {
                // Desplazamiento suave y mostrar panel
                mobileSongInfo.style.transform = 'translateY(0)';
                mobileSongInfo.classList.add('active');
                
                // Ocultar botón mientras el panel está visible
                this.style.display = 'none';
                
                // Enfocar el panel
                mobileSongInfo.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            });
        }

        //Al cerrar el panel móvil
        if (closeMobileInfo) {
            closeMobileInfo.addEventListener('click', function() {
                mobileSongInfo.style.transform = 'translateY(150%)';

                // Mostrar botón nuevamente después de 0.5s
                setTimeout(() => {
                    if (expandBtn) expandBtn.style.display = 'block';
                }, 300);// Coincide con la duración de la transición CSS
            });
        }

        loadSongs();
        loadPlaybackState().then(() => {
            // Si no hay estado guardado, cargar la primera canción
            if (!localStorage.getItem('playbackState') && currentPlaylist.length > 0) {
                loadSong(currentSongIndex);
            }
        });
        setupEventListeners();
        updateTheme();
        setupChat();

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.addEventListener('message', (event) => {
            if (event.data.action === 'play') {
                playSong();
            } else if (event.data.action === 'pause') {
                pauseSong();
            } else if (event.data.action === 'next') {
                nextSong();
            } else if (event.data.action === 'prev') {
                prevSong();
            }
            });
        }

    }

    // Añade esta nueva función para búsqueda
    function searchSongs() {
        const searchTerm = this.value.toLowerCase();
        
        // Cerrar chat si está abierto
        const chatContainer = document.getElementById('chat-container');
        if (chatContainer.classList.contains('active')) {
            chatContainer.classList.remove('active');
            document.body.classList.remove('chat-open');
            document.querySelector('.main-container').style.marginRight = '0';
        }
        
        // Si el campo de búsqueda está vacío, restaurar la playlist original
        if (!searchTerm.trim()) {
            restoreOriginalPlaylist();
            return;
        }

        // Filtrar canciones
        const filteredSongs = songs.filter(song => 
            song.title.toLowerCase().includes(searchTerm) || 
            song.artist.toLowerCase().includes(searchTerm)
        );
    
        currentPlaylist = searchTerm ? filteredSongs : [...songs];
        currentSongIndex = 0;
        loadSongs();
    
        // Actualizar título de la playlist
        playlistTitle.textContent = `Resultados para: ${searchTerm}`;

    }

    // Función para restaurar la playlist original
    function restoreOriginalPlaylist() {
        // Obtener la playlist activa actual del sidebar
        const activePlaylistItem = document.querySelector('.playlists li.active');
        const playlistName = activePlaylistItem ? activePlaylistItem.dataset.playlist : 'all';
        
        // Filtrar según la playlist activa
        if (playlistName === 'podcasts') {
            currentPlaylist = songs.filter(song => song.playlist.includes('podcasts'));
        } else if (playlistName === 'songs') {
            currentPlaylist = songs.filter(song => song.playlist.includes('songs'));
        } else if (playlistName === 'all') {
            currentPlaylist = [...songs];
        } else {
            currentPlaylist = songs.filter(song => song.playlist.includes(playlistName));
        }
        
        // Mantener la canción actual en reproducción si está en la nueva playlist
        const currentSongTitle = document.getElementById('current-song-title').textContent;
        const currentSong = currentPlaylist.find(song => song.title === currentSongTitle);
        currentSongIndex = currentSong ? currentPlaylist.indexOf(currentSong) : 0;
        
        loadSongs();
        
        // Restaurar el título de la playlist
        if (activePlaylistItem) {
            playlistTitle.textContent = activePlaylistItem.textContent.trim();
        } else {
            playlistTitle.textContent = 'Explorar todo';
        }
    }

    // Cargar canciones en la lista
    function loadSongs() {
        songsList.innerHTML = '';
        currentPlaylist.forEach((song, index) => {
            const songCard = document.createElement('div');
            songCard.className = 'song-card';
            songCard.innerHTML = `
                <div class="song-card-img-container">
                    <img src="${song.cover}" alt="${song.title}" class="song-card-img">
                </div>
                <div class="song-card-info">
                    <h4>${song.title}</h4>
                    <p>${song.artist}</p>
                </div>
            `;
            songCard.addEventListener('click', () => playSongFromList(index));
            songsList.appendChild(songCard);
        });
    }

    // Reproducir canción desde la lista
    function playSongFromList(index) {
        currentSongIndex = index;
        loadSong(currentSongIndex);
        playSong();
        mobileSongInfo.classList.add('active');
    }

    // Cargar canción específica
    function loadSong(index) {
        const song = currentPlaylist[index];
        audioPlayer.src = song.file;
        updateSongInfo(song);
        updateMediaSession(song);
        updateServiceWorkerPlaybackState();
        
        // Resaltar canción actual en la lista
        document.querySelectorAll('.song-card').forEach((card, i) => {
            if (i === index) {
                card.classList.add('playing');
            } else {
                card.classList.remove('playing');
            }
        });
    }

    // Actualizar información de la canción
    function updateSongInfo(song) {
        // Desktop
        document.getElementById('current-song-title').textContent = song.title;
        document.getElementById('current-song-artist').textContent = song.artist;
        document.getElementById('current-album-art').src = song.cover;
        
        // Mobile (panel expandido)
        document.getElementById('mobile-song-title').textContent = song.title;
        document.getElementById('mobile-song-artist').textContent = song.artist;
        document.getElementById('mobile-album-art').src = song.cover;
    }

    // Configurar MediaSession API
    function updateMediaSession(song) {
        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: song.title,
                artist: song.artist,
                artwork: [
                    { src: song.cover, sizes: '96x96', type: 'image/jpeg' },
                    { src: song.cover, sizes: '128x128', type: 'image/jpeg' },
                    { src: song.cover, sizes: '192x192', type: 'image/jpeg' },
                    { src: song.cover, sizes: '256x256', type: 'image/jpeg' },
                    { src: song.cover, sizes: '384x384', type: 'image/jpeg' },
                    { src: song.cover, sizes: '512x512', type: 'image/jpeg' }
                ]
            });

            navigator.mediaSession.setActionHandler('play', playSong);
            navigator.mediaSession.setActionHandler('pause', pauseSong);
            navigator.mediaSession.setActionHandler('previoustrack', prevSong);
            navigator.mediaSession.setActionHandler('nexttrack', nextSong);

            navigator.mediaSession.setActionHandler('seekbackward', () => {
                audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 10);
            });

            navigator.mediaSession.setActionHandler('seekforward', () => {
                audioPlayer.currentTime = Math.min(audioPlayer.duration, audioPlayer.currentTime + 10);
            });
        }
    }

    // Reproducir canción
    function playSong() {
        audioPlayer.play()
            .then(() => {
                isPlaying = true;
                updatePlayButtons(true);
                document.querySelector('.player').classList.add('playing');
                document.querySelector('.mobile-song-info').classList.add('playing');
                updateServiceWorkerPlaybackState();
            })
            .catch(error => {
                console.error("Error al reproducir:", error);
                // alert("Error al reproducir. No pasa nada, los archivos MP3 llegaron hasta al final ;)");
            });
    }

    // Pausar canción
    function pauseSong() {
        audioPlayer.pause();
        isPlaying = false;
        updatePlayButtons(false);
        document.querySelector('.player').classList.remove('playing');
        document.querySelector('.mobile-song-info').classList.remove('playing');
        updateServiceWorkerPlaybackState();
    }

    // Actualizar botones de play/pause
    function updatePlayButtons(playing) {
        playBtns.forEach(btn => {
            btn.innerHTML = playing ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
        });
    }

    // Canción anterior
    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
        loadSong(currentSongIndex);
        if (isPlaying) playSong();
    }

    // Siguiente canción
    function nextSong() {
        if (isRepeated) {
            audioPlayer.currentTime = 0;
            playSong();
            return;
        }
        
        currentSongIndex = (currentSongIndex + 1) % currentPlaylist.length;
        loadSong(currentSongIndex);
        if (isPlaying) playSong();
    }

    // Barra de progreso
    function updateProgress() {
        const { currentTime, duration } = audioPlayer;
        const progressPercent = (currentTime / duration) * 100;
        
        progressBar.style.width = `${progressPercent}%`;
        if (mobileProgressBar) {
            mobileProgressBar.style.width = `${progressPercent}%`;
        }
        
        // ACTUALIZACION: Mover el thumb
        const progressThumb = document.querySelector('.progress-thumb');
        if (progressThumb) {
            progressThumb.style.left = `${progressPercent}%`;
        }

        currentTimeEl.textContent = formatTime(currentTime);
        if (durationEl) durationEl.textContent = formatTime(duration);
        
        // Actualizar tiempos en móvil
        const mobileTimes = document.querySelectorAll('.mobile-progress-container .time');
        if (mobileTimes.length > 0) {
            mobileTimes[0].textContent = formatTime(currentTime);
            if (mobileTimes[1]) mobileTimes[1].textContent = formatTime(duration);
        }
    }

    // Formatear tiempo
    function formatTime(time) {
        if (isNaN(time)) return "0:00";
        
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // Establecer progreso al hacer clic
    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audioPlayer.duration;
        audioPlayer.currentTime = (clickX / width) * duration;
    }

    // Cambiar tema
    function toggleTheme() {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('light-theme', !isDarkMode);
        themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
        localStorage.setItem('darkMode', isDarkMode);
    }

    // Actualizar tema al cargar
    function updateTheme() {
        const savedDarkMode = localStorage.getItem('darkMode') !== 'false';
        if (!savedDarkMode) toggleTheme();
    }

    // Modo aleatorio
    function toggleShuffle() {
        isShuffled = !isShuffled;
        shuffleBtn.classList.toggle('active', isShuffled);
        
        if (isShuffled) {
            originalPlaylistOrder = [...currentPlaylist];
            currentPlaylist = [...currentPlaylist].sort(() => Math.random() - 0.5);
        } else {
            currentPlaylist = [...originalPlaylistOrder];
        }
        
        // Mantener la canción actual en reproducción
        const currentSong = currentPlaylist.find(song => 
            song.title === document.getElementById('current-song-title').textContent
        );
        currentSongIndex = currentPlaylist.indexOf(currentSong);
        
        loadSongs();
    }

    // Modo repetir
    function toggleRepeat() {
        isRepeated = !isRepeated;
        repeatBtn.classList.toggle('active', isRepeated);
    }

    // Filtrar por playlist
        /**
     * Filtra las canciones por playlist y maneja el estado del chat
     * @param {string} playlistName - Nombre de la playlist a filtrar
     */
    function filterPlaylist(playlistName) {
        // 1. Limpiar el estado de reproducción guardado
        clearPlaybackState();

        // 2. Manejar el estado del chat
        const chatContainer = document.getElementById('chat-container');
        const isChatActive = chatContainer.classList.contains('active');
        
        // Cerrar chat si está abierto y no estamos seleccionando el chat
        if (isChatActive && playlistName !== 'chat') {
            chatContainer.classList.remove('active');
            document.body.classList.remove('chat-open');
            
            // Restaurar el main content en desktop
            if (window.innerWidth > 768) {
                document.querySelector('.main-container').style.marginRight = '0';
            } else {
                // Restaurar visibilidad en móvil
                document.querySelector('.main-container').style.opacity = '1';
                document.querySelector('.main-container').style.pointerEvents = 'auto';
            }
        }

        // Guardar el estado actual de reproducción
        const currentSongTitle = document.getElementById('current-song-title').textContent;
        const currentSongArtist = document.getElementById('current-song-artist').textContent;
        const wasPlaying = isPlaying;
        const previousPlaylist = [...currentPlaylist];

        // 3. Filtrar las canciones según la playlist seleccionada
        if (playlistName === 'podcasts') {
            currentPlaylist = songs.filter(song => song.playlist.includes('podcasts'));
        } else if (playlistName === 'songs') {
            currentPlaylist = songs.filter(song => song.playlist.includes('songs'));
        } else if (playlistName === 'all') {
            currentPlaylist = [...songs];
        } else {
            currentPlaylist = songs.filter(song => song.playlist.includes(playlistName));
        }
        
        // Manejar la transición de la canción actual
        const currentSongInNewPlaylist = currentPlaylist.find(song => 
            song.title === currentSongTitle && 
            song.artist === currentSongArtist
        );

        // 4. Actualizar la interfaz de usuario
        updatePlaylistUI(playlistName);
        
        // 5. Manejar el sidebar en móvil
        handleMobileSidebar();
    }

    /**
     * Actualiza los elementos de la UI relacionados con la playlist
     * @param {string} playlistName - Nombre de la playlist seleccionada
     */
    function updatePlaylistUI(playlistName) {
        // Obtener el texto del item seleccionado
        const selectedItem = document.querySelector(`.playlists li[data-playlist="${playlistName}"]`);
        const playlistTitleText = selectedItem ? selectedItem.textContent : 'Explorar todo';
        
        // Actualizar el título en el MainContent
        playlistTitle.textContent = playlistTitleText;
        
        // Reiniciar el índice de la canción actual
        currentSongIndex = 0;
        
        // Cargar las canciones filtradas
        loadSongs();
        
        // Actualizar estado activo en los items de playlist
        updateActivePlaylistItems(playlistName);
    }

    /**
     * Actualiza los items de playlist marcando el activo
     * @param {string} activePlaylist - Nombre de la playlist activa
     */
    function updateActivePlaylistItems(activePlaylist) {
        playlistItems.forEach(item => {
            if (item.dataset.playlist === activePlaylist) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    /**
     * Maneja el comportamiento del sidebar en dispositivos móviles
     */
    function handleMobileSidebar() {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
            document.querySelector('.main-container').classList.remove('sidebar-open');
        }
    }

    // Configurar event listeners
    function setupEventListeners() {
        // Controles de reproducción
        playBtns.forEach(btn => btn.addEventListener('click', () => {
            isPlaying ? pauseSong() : playSong();
        }));

        prevBtn.addEventListener('click', prevSong);
        nextBtn.addEventListener('click', nextSong);
        shuffleBtn.addEventListener('click', toggleShuffle);
        repeatBtn.addEventListener('click', toggleRepeat);

        // Barra de progreso
        audioPlayer.addEventListener('timeupdate', updateProgress);
        audioPlayer.addEventListener('ended', nextSong);
        
        if (progressContainer) {
            progressContainer.addEventListener('click', setProgress);
        }
        
        if (mobileProgressContainer) {
            mobileProgressContainer.addEventListener('click', setProgress);
        }

        // Volumen
        if (volumeSlider) {
            volumeSlider.addEventListener('input', () => {
                audioPlayer.volume = volumeSlider.value / 100;
            });
        }

        // Tema
        themeToggle.addEventListener('click', toggleTheme);

        // Playlists
        playlistItems.forEach(item => {
            item.addEventListener('click', () => {
                filterPlaylist(item.dataset.playlist);
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('active');
                    document.querySelector('.main-container').classList.remove('sidebar-open');
                }
            });
        });

        // Información móvil
        if (closeMobileInfo) {
            closeMobileInfo.addEventListener('click', () => {
                mobileSongInfo.classList.remove('active');
                // Hacer scroll suave al player
                document.querySelector('.player').scrollIntoView({ behavior: 'smooth' });
            });
        }

        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('/sw.js')
                .then(registration => console.log('SW registrado:', registration.scope))
                .catch(error => console.log('Error al registrar SW:', error));
            });
        }
    }

    // Función para guardar el estado al pausar o cambiar de canción
    function savePlaybackState() {
        if (currentPlaylist[currentSongIndex]) {
            const song = currentPlaylist[currentSongIndex];
            const state = {
                currentTime: audioPlayer.currentTime,
                songIndex: currentSongIndex,
                songTitle: song.title,
                songArtist: song.artist,
                songFile: song.file,
                playlistName: song.playlist[1] || song.playlist[0],
                isPlaying: isPlaying,
                timestamp: Date.now()
            };
            localStorage.setItem('playbackState', JSON.stringify(state));
        }
    }

    // Guardar estado al:
    audioPlayer.addEventListener('pause', savePlaybackState); // Al pausar
    audioPlayer.addEventListener('timeupdate', savePlaybackState); // Cada segundo
    audioPlayer.addEventListener('ended', () => {
        localStorage.removeItem('playbackState'); // Limpiar estado al terminar
    });

    // Cargar el estado al iniciar la aplicación
    async function loadPlaybackState() {
        const savedState = localStorage.getItem('playbackState');
        if (!savedState) return;

        try {
            const state = JSON.parse(savedState);
            
            // Buscar la canción exacta que estaba sonando
            const targetSong = songs.find(s => 
                s.file === state.songFile && 
                s.playlist.includes(state.playlistName)
            );

            if (!targetSong) {
                console.warn("Canción no encontrada en biblioteca");
                localStorage.removeItem('playbackState');
                return;
            }

            // Filtrar la playlist correcta
            currentPlaylist = songs.filter(song => 
                song.playlist.includes(state.playlistName)
            );
            currentSongIndex = currentPlaylist.findIndex(song => 
                song.file === state.songFile
            );

            if (currentSongIndex === -1) return;

            // Cargar la canción
            await loadSong(currentSongIndex);
            
            // Configurar el tiempo cuando el audio esté listo
            const setPlaybackTime = () => {
                if (audioPlayer.readyState > 0) {
                    const safeTime = Math.min(
                        state.currentTime, 
                        audioPlayer.duration - 0.5
                    );
                    
                    if (!isNaN(safeTime)) {
                        audioPlayer.currentTime = safeTime;
                    }

                    if (state.isPlaying) {
                        setTimeout(() => {
                            playSong().catch(e => {
                                console.log("Reproducción automática fallida:", e);
                                document.querySelector('.play-btn').classList.add('needs-interaction');
                            });
                        }, 500);
                    }

                    audioPlayer.removeEventListener('canplay', setPlaybackTime); 
                }
            };
            
            audioPlayer.addEventListener('canplay', setPlaybackTime);
            setPlaybackTime();

            // Actualizar UI
            highlightActivePlaylist(state.playlistName);
            loadSongs();

        } catch (error) {
            console.error("Error al cargar estado:", error);
            localStorage.removeItem('playbackState');
        }
    }

    function highlightActivePlaylist(playlistName) {
        // 1. Resaltar en sidebar
        playlistItems.forEach(item => {
            const isActive = item.dataset.playlist === playlistName;
            item.classList.toggle('active', isActive);
            
            if (isActive && window.innerWidth <= 768) {
                item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
        });
    
        // 2. Actualizar título
        const activeItem = document.querySelector(`.playlists li[data-playlist="${playlistName}"]`);
        if (activeItem) {
            playlistTitle.textContent = activeItem.textContent.trim();
        }
    }
    
    function clearStalePlaybackState() {
        const savedState = localStorage.getItem('playbackState');
        if (!savedState) return;
    
        try {
            const state = JSON.parse(savedState);
            // Eliminar si tiene más de 24 horas
            if (Date.now() - (state.timestamp || 0) > 86400000) {
                localStorage.removeItem('playbackState');
            }
        } catch (e) {
            localStorage.removeItem('playbackState');
        }
    }

    // Llamar al cargar la app
    window.addEventListener('load', loadPlaybackState);

    // Limpiar el estado cuando sea necesario 
    function clearPlaybackState() {
        localStorage.removeItem('playbackState'); //Al cambiar de playlist o reiniciar
    }

    // Evento para arrastrar el thumb
    const progressThumb = document.querySelector('.progress-thumb');
    if (progressThumb) {
        progressThumb.addEventListener('mousedown', (e) => {
            e.preventDefault();
            const moveThumb = (e) => {
                const containerRect = progressContainer.getBoundingClientRect();
                const clickPosition = e.clientX - containerRect.left;
                const percentage = (clickPosition / containerRect.width) * 100;
                const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
                
                progressBar.style.width = `${clampedPercentage}%`;
                progressThumb.style.left = `${clampedPercentage}%`;
                audioPlayer.currentTime = (clampedPercentage / 100) * audioPlayer.duration;
            };
    
            document.addEventListener('mousemove', moveThumb);
            document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', moveThumb);
            });
        });
    }

    // ==============================================
    // CONFIGURACIÓN SERVICE WORKER - INICIO
    // ==============================================
    function updateServiceWorkerPlaybackState() {
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
            const currentSong = currentPlaylist[currentSongIndex];
            navigator.serviceWorker.controller.postMessage({
            action: 'UPDATE_PLAYBACK',
            title: currentSong.title,
            artist: currentSong.artist,
            cover: currentSong.cover,
            isPlaying: isPlaying
            });
        }
    }

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.addEventListener('message', (event) => {
            if (event.data.action === 'play') {
            playSong();
            } else if (event.data.action === 'pause') {
            pauseSong();
            } else if (event.data.action === 'next') {
            nextSong();
            }
        });
    }

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            // Ruta correcta a tu service worker (ajusta según tu estructura)
            navigator.serviceWorker.register('/sw.js').then(
                function(registration) {
                    console.log('ServiceWorker registrado con éxito:', registration.scope);
                    
                    // Configurar mensajes para estado en segundo plano
                    if (registration.active) {
                        registration.active.postMessage({
                            type: 'INIT_SESSION',
                            data: { keepAlive: true }
                        });
                    }
                },
                function(err) {
                    console.log('Error al registrar ServiceWorker:', err);
                }
            );
            
            // Manejar actualizaciones
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                window.location.reload();
            });
        });
    }

    // Manejar comunicación con Service Worker
    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
            type: 'PLAYER_STATUS',
            data: { active: true }
        });
    }
    // ==============================================
    // CONFIGURACIÓN SERVICE WORKER - FIN
    // ==============================================

    // Iniciar
    initPlayer();

    
});