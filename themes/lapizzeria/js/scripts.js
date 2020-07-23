jQuery(document).ready( $ => {

    $("#menu ul").slicknav({

                label: '',
                duplicate: true,
                duration: 200,
                easingOpen: 'swing',
                easingClose: 'swing',
                closedSymbol: '&#9658;',
                openedSymbol: '&#9660;',
                //prependTo: 'body',
                appendTo: $(".site-header"),
                parentTag: 'a',
                closeOnClick: false,
                allowParentLinks: false,
                nestedParentLinks: true,
                showChildren: false,
                removeIds: true,
                removeClasses: false,
                removeStyles: false,
                brand: '',
                animations: 'jquery',

    });

});