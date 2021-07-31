enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const FireLauncher = SpriteKind.create()
    export const Ladder = SpriteKind.create()
    export const Escape = SpriteKind.create()
    export const Stones = SpriteKind.create()
    export const GhostStone = SpriteKind.create()
    export const WaterBottles = SpriteKind.create()
}
function ConfigureLevel () {
    for (let value of tiles.getTilesByType(assets.tile`tile4`)) {
        fire = sprites.create(img`
            .........e244e..........
            .........e442e..........
            .........e4eee..........
            .........e2efe..........
            .......eeeeeeeee........
            ......eefffddeeee.......
            ......eefeeefeede.......
            .....eeefeeeeeeeee......
            ....eeeeeeffeedfee......
            ...eeeeeeeeedeeefee.....
            ..eeeeeeeeeffeeefeee....
            .eeeeefffeeefeeefeefe...
            .eeeeeeeeefefeeefeefee..
            eefefeeeeeedfeeeeeefee.e
            effeeeeededeeeeeeeefeeee
            eeeedddddeeeeeeffffffeee
            `, SpriteKind.FireLauncher)
        tiles.placeOnTile(fire, value)
        tiles.setTileAt(value, assets.tile`tile3`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile8`)) {
        ladder = sprites.create(assets.tile`tile6`, SpriteKind.Ladder)
        tiles.placeOnTile(ladder, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile7`)) {
        escape = sprites.create(EscapePicture, SpriteKind.Escape)
        tiles.placeOnTile(escape, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile10`)) {
        waterBottle = sprites.create(img`
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 1 . . . . 
            . . . . . . 1 . . . . . . . 
            . . . . 1 1 1 1 1 . . . . . 
            . . . 9 9 9 9 9 9 9 . . . . 
            . . . 9 9 9 9 9 9 9 . . . . 
            . . . 9 9 9 9 9 9 9 . . . . 
            . . . . 9 9 9 9 9 . . . . . 
            . . . . 9 9 9 9 9 . . . . . 
            . . . . 9 9 9 9 9 . . . . . 
            . . . . 9 9 9 9 9 . . . . . 
            . . . . 9 9 9 9 9 . . . . . 
            . . . . 9 9 9 9 9 . . . . . 
            . . . . 9 9 9 9 9 . . . . . 
            `, SpriteKind.WaterBottles)
        tiles.placeOnTile(waterBottle, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile2`)) {
        mySprite = sprites.create(MainCharacterPicture, SpriteKind.Player)
        tiles.placeOnRandomTile(mySprite, assets.tile`tile2`)
        tiles.setTileAt(value, assets.tile`transparency16`)
        scene.cameraFollowSprite(mySprite)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.WaterBottles, function (sprite, otherSprite) {
    statusbar.value = 100
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (JumpCounter < 2) {
        JumpCounter = 1 + JumpCounter
        mySprite.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.GhostStone, function (sprite, otherSprite) {
    statusbar.value += -20
    otherSprite.destroy()
    for (let value of sprites.allOfKind(SpriteKind.Stones)) {
        value.destroy()
    }
    otherSprite.startEffect(effects.ashes, 500)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    statusbar.value += -20
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Escape, function (sprite, otherSprite) {
    for (let value of sprites.allOfKind(SpriteKind.FireLauncher)) {
        value.destroy()
    }
    mySprite.destroy()
    Level = 1 + Level
    if (Level == 1) {
        tiles.setTilemap(tilemap`level2`)
        ConfigureLevel()
        for (let value of tiles.getTilesByType(assets.tile`tile2`)) {
            tiles.placeOnRandomTile(mySprite, assets.tile`tile2`)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ladder, function (sprite, otherSprite) {
    mySprite.ay = 0
    controller.moveSprite(mySprite)
})
let fireball: Sprite = null
let stones: Sprite = null
let ghoststones: Sprite = null
let JumpCounter = 0
let waterBottle: Sprite = null
let escape: Sprite = null
let ladder: Sprite = null
let fire: Sprite = null
let mySprite: Sprite = null
let statusbar: StatusBarSprite = null
let MainCharacterPicture: Image = null
let EscapePicture: Image = null
let Level = 0
Level = 0
EscapePicture = assets.tile`tile6`
MainCharacterPicture = img`
    . . . . . f f f f . . . . . 
    . . . f f 5 5 5 5 f f . . . 
    . . f 5 5 5 5 5 5 5 5 f . . 
    . f 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 d b b d 5 5 5 f . 
    f 5 5 5 b 4 4 4 4 b 5 5 5 f 
    f 5 5 c c 4 4 4 4 c c 5 5 f 
    f b b f b f 4 4 f b f b b f 
    f b b 4 1 f d d f 1 4 b b f 
    . f b f d d d d d d f b f . 
    . f e f e 4 4 4 4 e f e f . 
    . e 4 f 6 9 9 9 9 6 f 4 e . 
    . 4 d c 9 9 9 9 9 9 c d 4 . 
    . 4 f b 3 b 3 b 3 b b f 4 . 
    . . f f 3 b 3 b 3 3 f f . . 
    . . . . f f b b f f . . . . 
    `
scene.setBackgroundColor(14)
tiles.setTilemap(tilemap`level1`)
statusbar = statusbars.create(40, 6, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar.setPosition(20, 0)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar.value = 100
ConfigureLevel()
game.onUpdate(function () {
    controller.moveSprite(mySprite, 100, 0)
    mySprite.ay = 500
    for (let value of sprites.allOfKind(SpriteKind.GhostStone)) {
        ghoststones.setPosition(stones.x, stones.y)
    }
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        JumpCounter = 0
    }
})
game.onUpdate(function () {
    console.logValue("x", mySprite.x % 2)
    if (mySprite.vy != 0) {
        mySprite.setImage(img`
            . . . . . c c c f f f . . . 
            . . . f f 5 5 5 5 5 5 f f . 
            . . f 5 5 5 5 5 5 5 5 5 f . 
            . c 5 5 5 5 5 5 5 5 5 5 5 f 
            . c 5 5 5 5 5 5 5 d b 5 5 f 
            f 5 5 5 5 5 5 5 b 4 4 d 5 f 
            f 5 5 5 5 5 c c 4 4 4 b 5 f 
            f b 5 5 5 b c b c 4 4 f f f 
            c b b b b b e 1 c d d f f . 
            c b b b b f 4 d d d d f . . 
            . c b b 4 e e e 4 4 4 f . . 
            . . f f 4 d d e 9 9 9 f . . 
            . . . f e d d e 9 9 9 f . . 
            . . . f b e e b 3 b 3 3 f . 
            . . . f f b 3 b 3 b 3 f f . 
            . . . . . f f b b f f . . . 
            `)
    } else {
        if (mySprite.x % 2 < 1) {
            mySprite.setImage(img`
                . . . . . c c c f f f . . . 
                . . . f f 5 5 5 5 5 5 f f . 
                . . f 5 5 5 5 5 5 5 5 5 f . 
                . c 5 5 5 5 5 5 5 5 5 5 5 f 
                c 5 5 5 5 5 5 5 5 d b 5 5 f 
                f 5 5 5 5 5 5 5 b 4 4 d 5 f 
                f 5 5 5 5 5 c c 4 4 4 b 5 f 
                f b 5 5 5 b c b c 4 4 f f . 
                c b b b b b e 1 c d d f . . 
                c b b b b e e d d d d c . . 
                . c b b 4 d d e 4 4 4 c . . 
                . . c c e d d e 9 9 9 c . . 
                . . c b b e e b b b b b c . 
                . . . c b 3 3 3 b 3 b 3 c . 
                . . . . c c c b b c c c . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                `)
        } else {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . 
                . . . . . c c c f f f . . . 
                . . . f f 5 5 5 5 5 5 f f . 
                . . f 5 5 5 5 5 5 5 5 5 f . 
                . c 5 5 5 5 5 5 5 5 5 5 5 f 
                c 5 5 5 5 5 5 5 5 d b 5 5 f 
                f 5 5 5 5 5 5 5 b 4 4 d 5 f 
                f 5 5 5 5 5 c c 4 4 4 b 5 f 
                f b 5 5 5 b c b c 4 4 f f . 
                c b b b b b e 1 c d d f . . 
                c b b b b e e d d d d c . . 
                . c b b 4 d d e 4 4 4 c . . 
                . . c c e d d e 9 9 9 c . . 
                . . c b b e e b b b b b c . 
                . . . c b 3 3 3 b 3 b 3 c . 
                . . . . c c c b b c c c . . 
                `)
        }
    }
    if (mySprite.vx < 0) {
        mySprite.image.flipX()
    }
})
game.onUpdateInterval(5000, function () {
    if (Level == 1) {
        for (let value of sprites.allOfKind(SpriteKind.Stones)) {
            value.destroy()
        }
        for (let value of sprites.allOfKind(SpriteKind.GhostStone)) {
            value.destroy()
        }
        scene.cameraShake(4, 500)
        stones = sprites.create(img`
            . . . . . . . . . c c 8 . . . . 
            . . . . . . 8 c c c f 8 c c . . 
            . . . c c 8 8 f c a f f f c c . 
            . . c c c f f f c a a f f c c c 
            8 c c c f f f f c c a a c 8 c c 
            c c c b f f f 8 a c c a a a c c 
            c a a b b 8 a b c c c c c c c c 
            a f c a a b b a c c c c c f f c 
            a 8 f c a a c c a c a c f f f c 
            c a 8 a a c c c c a a f f f 8 a 
            . a c a a c f f a a b 8 f f c a 
            . . c c b a f f f a b b c c 6 c 
            . . . c b b a f f 6 6 a b 6 c . 
            . . . c c b b b 6 6 a c c c c . 
            . . . . c c a b b c c c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Stones)
        ghoststones = sprites.create(img`
            . . . . . . . . . c c 8 . . . . 
            . . . . . . 8 c c c f 8 c c . . 
            . . . c c 8 8 f c a f f f c c . 
            . . c c c f f f c a a f f c c c 
            8 c c c f f f f c c a a c 8 c c 
            c c c b f f f 8 a c c a a a c c 
            c a a b b 8 a b c c c c c c c c 
            a f c a a b b a c c c c c f f c 
            a 8 f c a a c c a c a c f f f c 
            c a 8 a a c c c c a a f f f 8 a 
            . a c a a c f f a a b 8 f f c a 
            . . c c b a f f f a b b c c 6 c 
            . . . c b b a f f 6 6 a b 6 c . 
            . . . c c b b b 6 6 a c c c c . 
            . . . . c c a b b c c c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.GhostStone)
        stones.setFlag(SpriteFlag.Ghost, true)
        stones.startEffect(effects.disintegrate, 5000)
        stones.setFlag(SpriteFlag.AutoDestroy, false)
        stones.setPosition(randint(mySprite.x - scene.screenWidth() / 2, mySprite.x + scene.screenWidth() / 2), 10)
        stones.setVelocity(0, 1)
        stones.ay = 50
    }
})
game.onUpdateInterval(2000, function () {
    for (let value of sprites.allOfKind(SpriteKind.FireLauncher)) {
        fireball = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 5 . . . . . . . 
            . . . . 4 . 2 5 5 5 5 . . . . . 
            . . . 4 4 4 4 4 2 2 5 . . . . . 
            . . . 4 5 4 . 2 . 2 5 . . . . . 
            . . . 4 . 4 . 2 . 2 5 . . . . . 
            . . 4 4 2 4 4 2 . 4 . . . . . . 
            . . 4 4 . 4 4 2 2 4 2 . . . . . 
            . . 4 4 2 4 5 2 2 4 2 . . . . . 
            . . 4 . 4 . 4 5 5 4 2 . . . . . 
            . . . . 4 4 4 . 4 . . . . . . . 
            . . . . . . . . 4 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, value, randint(-20, 20), -50)
        fireball.ay = 5
        fireball.startEffect(effects.fire, 500)
    }
})
