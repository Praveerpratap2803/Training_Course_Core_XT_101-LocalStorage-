const fs = require( 'fs' );
const path = require( 'path' );

const filePath = path.join( __dirname, '01-git.pdf' );

const rs = fs.createReadStream( filePath );

rs.on( 'data', ( chunk ) => {
    console.log( '*** new chunk ***' );
    console.log( chunk );
});

rs.on( 'end', () => {
    console.log( 'file has been read' );
});

rs.on( 'error', err => {
    console.log( err.message );
});