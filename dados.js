let dados = [
    {
        titulo: "Baleia-azul (Balaenoptera musculus)",
        descricao: " A baleia-azul é o maior animal que já existiu na Terra! Com até 30 metros de comprimento e um peso de mais de 180 toneladas, ela é um gigante dos oceanos. Sua dieta se baseia em pequenos crustáceos chamados krill.",
        links: "https://pt.wikipedia.org/wiki/Baleia-azul#:~:text=A%20baleia%2Dazul%20(nome%20cient%C3%ADfico,maiores%20animais%20que%20j%C3%A1%20existiram.",
        tags: "grande maior grandes maiores baleia baleias",

    },

    {
        titulo: "Água-viva juba-de-leão (Cyanea capillata)",
        descricao: " A água-viva juba-de-leão é a maior água-viva do mundo. Seus tentáculos podem chegar a 36 metros de comprimento! Apesar de sua aparência assustadora, ela não é perigosa para os humanos.",
        links: "https://pt.wikipedia.org/wiki/Cyanea_capillata#:~:text=A%20%C3%A1gua%2Dviva%2Dcabeluda%20(,um%20pr%C3%A9dio%20de%2013%20andares.",
        tags: "grande maior grandes maiores agua viva juba ",

    },

    {
        titulo: "Tubarão-baleia (Rhincodon typus)",
        descricao: "O tubarão-baleia é o maior peixe do mundo. Apesar do nome, ele é inofensivo para os humanos e se alimenta de plâncton. Pode chegar a 18 metros de comprimento.",
        links: "https://pt.wikipedia.org/wiki/Tubar%C3%A3o-baleia#:~:text=O%20tubar%C3%A3o%2Dbaleia%20(nome%20cient%C3%ADfico,(61%2C7%20p%C3%A9s).",
        tags: "grande maior grandes maiores tubarao baleia",

    },

    {
        titulo: "Lula colossal (Mesonychoteuthis hamiltoni)",
        descricao: " A lula colossal é um dos predadores mais temidos das profundezas. Ela pode chegar a 13 metros de comprimento e possui os maiores olhos do reino animal.",
        links: "https://pt.wikipedia.org/wiki/Lula-colossal#:~:text=A%20lula%2Dcolossal%20(Mesonychoteuthis%20hamiltoni,os%2015%20metros%20de%20comprimento.",
        tags: "grande maior grandes maiores lula colossal",

    },

    {
        titulo: "Orca (Orcinus orca)",
        descricao: "A orca, também conhecida como baleia assassina, é um dos mamíferos marinhos mais inteligentes e poderosos. Ela pode chegar a 9 metros de comprimento e se alimenta de peixes, focas e até mesmo outras baleias.",
        links: "https://pt.wikipedia.org/wiki/Orca#:~:text=A%20Orca%20(Orcinus%20orca)%20%C3%A9,grupo%2C%20como%20por%20exemplo%20baleias.",
        tags: "grande maior grandes maiores orca",

    },

    {
        titulo: "Crocodilo-poroso (Crocodylus porosus)",
        descricao: "O crocodilo-poroso é o maior réptil do mundo. Ele pode chegar a 7 metros de comprimento e vive em estuários e manguezais.",
        links: "https://pt.wikipedia.org/wiki/Crocodilo-de-%C3%A1gua-salgada#:~:text=Crocodylus%20porosus,-Johann%20Gottlob%20Theaenus&text=Os%20crocodilos%2Dmarinhos%20apresentam%20um,cristas%20em%20torno%20dos%20olhos.",
        tags: "grande maior grandes maiores crocodilos porosos ",

    },

    {
        titulo: "Elefante-marinho (Mirounga leonina)",
        descricao: "  O elefante-marinho é a maior foca do mundo. Os machos podem chegar a 6,5 metros de comprimento e pesar mais de 4 toneladas.",
        links: "https://pt.wikipedia.org/wiki/Elefante-marinho-do-sul#:~:text=O%20elefante%2Dmarinho%2Ddo%2D,que%20facilita%20a%20sua%20diferencia%C3%A7%C3%A3o.",
        tags: "grande maior grandes maiores elefantes marinhos marinho",

    },

    {
        titulo: "Serpente marinha (Hydrophis platurus)",
        descricao: "A serpente marinha é a maior serpente marinha do mundo. Ela pode chegar a 3 metros de comprimento e é venenosa. ",
        links: "https://pt.wikipedia.org/wiki/Cobra-do-mar-pel%C3%A1gio#:~:text=A%20cobra%2Ddo%2Dmar%2D,%C3%BAnico%20membro%20do%20g%C3%AAnero%20Pelamis.",
        tags: "grande maior grandes maiores serpentes ",

    },

    {
        titulo: "Tartaruga-de-couro (Dermochelys coriacea)",
        descricao: " A tartaruga-de-couro é a maior tartaruga marinha do mundo. Ela pode chegar a 2,1 metros de comprimento e se alimenta de águas-vivas.",
        links: "https://pt.wikipedia.org/wiki/Tartaruga-de-couro#:~:text=A%20tartaruga%2Dde%2Dcouro%20(,tanto%20em%20apar%C3%AAncia%20quanto%20em",
        tags: "grande maior grandes maiores tartaruga tataruga couro ",

    },

    {
        titulo: "Estrela-do-mar (Asteroidea)",
        descricao: " As estrelas-do-mar são animais marinhos muito interessantes. Existem milhares de espécies diferentes, com tamanhos e cores variados.Algumas podem chegar a 1 metro de diâmetro.",
        links: "https://pt.wikipedia.org/wiki/Estrela-do-mar#:~:text=A%20estrela%2Ddo%2Dmar%20%C3%A9,at%C3%A9%20as%20g%C3%A9lidas%20%C3%A1guas%20polares.",
        tags: "grande maior grandes maiores estrelas estrelar mar",

    },

    {
        titulo: "Plâncton",
        descricao: "O plâncton é um grupo muito grande de organismos microscópicos que flutuam na água. Eles podem ser animais ou plantas e servem de alimento para muitos outros animais marinhos.",
        links: "https://pt.wikipedia.org/wiki/Pl%C3%A2ncton",
        tags: "água aguas agua menores menor pequeno pequenos",

    },

    {
        titulo: "Cavalinho-marinho pigmeu",
        descricao: "O cavalinho-marinho pigmeu é um dos menores vertebrados do mundo. Eles são tão pequenos que podem se camuflar em corais e algas.",
        links: "https://pt.wikipedia.org/wiki/Hippocampus_denise#:~:text=O%20cavalo%2Dmarinho%20pigmeu%20%C3%A9,descoberta%20ap%C3%B3s%20testes%20em%20laborat%C3%B3rios.&text=Hippocampus%20denise%20%C3%A9%20muito%20pequeno%2C%20tendo%20tamanho%20m%C3%A1ximo%20de%201.5%20cm.",
        tags: "água aguas agua menores menor pequeno pequenos",

    },

    {
        titulo: "Ofiúros",
        descricao: "Os ofiúros são parentes próximos das estrelas do mar, mas possuem braços mais finos e flexíveis. Algumas espécies são bem pequenas e podem passar despercebidas.",
        links: "https://pt.wikipedia.org/wiki/Ophiuroidea",
        tags: "água aguas agua menores menor pequeno pequenos",

    },

    {
        titulo: "Caranguejo-alface",
        descricao: "O caranguejo-alface é um crustáceo bem pequeno que se alimenta de algas. Ele possui uma carapaça achatada e se esconde entre as rochas.",
        links: "https://pt.wikipedia.org/wiki/Caranguejo",
        tags: "carangueijo alface crustaceo pequeno pequenos menores menor",

    },

    {
        titulo: "Camarão-pistola",
        descricao: " O camarão-pistola é famoso por seu som alto, produzido por uma das suas pinças. Apesar do barulho, ele é bem pequeno e pode caber na palma da mão.",
        links: "https://pt.wikipedia.org/wiki/Caranguejo", 
        tags: "camarao pequeno pequenos menores menor água aguas agua ",

    },

    {
        titulo: "Lesma-do-mar",
        descricao: " As lesmas-do-mar são moluscos marinhos coloridos e muito bonitos. Algumas espécies são bem pequenas e possuem formas e padrões incríveis.",
        links: "https://pt.wikipedia.org/wiki/Lesma_marinha#:~:text=Lesma%2Dmarinha%2C%20ou%20lesma%2D,torna%20semelhantes%20%C3%A0s%20lesmas%20terrestres.",
        tags: "lesmas lesma águas aguas pequenos pequeno menores menor",

    },

    {
        titulo: "Pipefish",
        descricao: "Os pipefish são parentes dos cavalos-marinhos e possuem um corpo alongado e fino. Algumas espécies são bem pequenas e se camuflam entre as algas.",
        links: "https://en.wikipedia.org/wiki/Pipefish",
        tags: "pipe água aguas agua cavalo marinho menor menores pequenos pequeno menor",

    },

    {
        titulo: "Caranguejo-anão",
        descricao: " O caranguejo-anão é um dos menores crustáceos do mundo. Ele vive em águas rasas e se alimenta de pequenos organismos.",
        links: "https://en.wikipedia.org/wiki/Rhithropanopeus",
        tags: "caranguejo carangueijo menor pequenos menores água agua aguas",

    },

    {
        titulo: "Polvo-pigmeu",
        descricao: "O polvo-pigmeu é um polvo bem pequeno que vive em águas profundas. Ele possui uma coloração vibrante e se esconde em fendas e buracos.",
        links: "https://en.wikipedia.org/wiki/Atlantic_pygmy_octopus",
        tags: "pequeno pequenos menor agua águas aguas polvo ",

    },

    {
        titulo: "Zooplâncton",
        descricao: "O zooplâncton é um grupo de pequenos animais que vivem na água e se alimentam de fitoplâncton. Eles são essenciais para a cadeia alimentar marinha.",
        links: "https://pt.wikipedia.org/wiki/Zoopl%C3%A2ncton#:~:text=O%20zoopl%C3%A2ncton%20%C3%A9%20o%20segundo,de%20alimenta%C3%A7%C3%A3o%20a%20organismos%20maiores.",
        tags: "pequeno pequenos menor agua água aguas fitoplancton"

    }
    
];