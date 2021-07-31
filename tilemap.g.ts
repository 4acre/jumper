// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`2a000b00000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000000000000000000000600000200000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000010101010000000000010101000001010100010101010101000000010101010101000000010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010100000000000000000000030303030303030403030303030303030403030303030304030303040303030303040303030303030303`, img`
..........................................
..........................................
..........................................
..........................................
..........................................
..........................................
..........................................
........................2222.....222..222.
222222...222222...2222....................
.............................222..........
..........................................
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`2a000b00000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000000000000000000000000500020000000000000600000000000000000000000000000000000000000000000000000000000000000500050000000000000000000000000000000000000000000000010101010000000000010101000001010100050101010101000000010101010101000000010101010000000000000000060000000000000000000000050000000000000000000000000000000000000000000000000000000001010100000000000000000000050303030303030403030303030303030403030303030304030303040303030303040303030303030303`, img`
..........................................
..........................................
..........................................
..........................................
..........................................
..........................................
..........................................
........................2222.....222..222.
.22222...222222...2222....................
.............................222..........
..........................................
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile8,myTiles.tile10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile1":return tile1;
            case "tile2":return tile2;
            case "tile3":return tile3;
            case "tile4":return tile4;
            case "tile5":return tile5;
            case "tile6":return tile6;
            case "tile7":return tile7;
            case "tile8":return tile8;
            case "tile9":return tile9;
            case "tile10":return tile10;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
