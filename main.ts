namespace SpriteKind {
    export const Portal = SpriteKind.create()
    export const MPlatform = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    platformer.jump(mySprite, 35)
    timer.after(200, function () {
        tiles.setTileAt(location, assets.tile`transparency16`)
        timer.after(1000, function () {
            tiles.setTileAt(location, assets.tile`myTile4`)
        })
    })
})
browserEvents.X.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (Direction == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . . c f e e e d d c c c c c 
            . . . . . f f e e e d d d d f . 
            . . . . f e e e e f f f f f . . 
            f f . f e e e e e e f f . . . . 
            f e . f e e f e e f e e f . . . 
            f e . f e e e f e e f e e f . . 
            f e f f e f b b f b d f d b f . 
            f f f f e b d d f d d f d d f . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . . c f e e e d d c c c c c 
            . . . . . f f e e e d d d d f . 
            . . . . f e e e f f e e e f . . 
            f f . f e e e e e f f f f f . . 
            f e . f e e f f e e f b d f . . 
            f e . f e e e f f e f d d f f . 
            f e f f e f b b e f f f f f f . 
            f f f f e b d d e e e f d d f . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . f f f f f . . . . . 
            . . . . . f e e e e e f . . . . 
            . . . . f e e d d d d d f . . . 
            . . . f f e d f f d d f f f . . 
            . . f d d e d d d d e e d d c . 
            . f f f d e d d c d d d d c c . 
            f d b f d e d d d c c c c d c . 
            f d d f f e e d d d d d d c . . 
            f f f e f f e e d d d d c . . . 
            . . f e e e f e e f f f . . . . 
            . f f f e e e e e e e f . . . . 
            . f e f f f e e e e e e f . . . 
            . f e f f f f f e e e e f f . . 
            . f e f f f b b f e e f d b f . 
            . f f f f b d d f e e f d d f . 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . . . . f f f f f . . . . . 
            . . . . . f e e e e e f . . . . 
            . . . . f e d d d d d d f . . . 
            . . . f f d f f d d f f d f . . 
            . . f d e d d d d e e d d d c . 
            . . f f e d d c d d d d c d c . 
            f f f f e d d d c c c c d d c . 
            f d b f f e d d d d d d d c . . 
            f d d f f f e e d d d d c . . . 
            f f f e e e f e e f f f . . . . 
            . f f f e e e e e e e f . . . . 
            . f e f f f e e e e e e f . . . 
            . f e f f f f f e e e e f f . . 
            . f e f f f b b f e e f d b f . 
            . f f f f b d d f f f f d d f . 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d d d d d f . . 
            . . . f d d e e d f f d d d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d f f c 
            . . . . f e e e f f f e f d d f 
            . . . . f f f f f e e e f d d f 
            . f f . f f e e e e e f f f f f 
            . f e . f f e e e f f e f f f . 
            . f e f f f b b f f e f d b f . 
            . f e f f b d d f e e f d d f . 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d d f d d f . . 
            . . . f d d e e d d f d d d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . f c f e e d d d f f f f c 
            . . . . f e e e e f f f d b f . 
            . . . . f e e f f f e f d d f . 
            . f f . f f f e e e e f f f . . 
            . f e . f f e e e e f e e f . . 
            . f e f f f f f f f e e e f f . 
            . f e f f f b b f e e f d b f . 
            . f f f f b d d e e f f d d f . 
            . . f f f f f f f f f f f f f . 
            `],
        100,
        false
        )
        timer.after(500, function () {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . c c c . . . . . . 
                . . . . . . a b a a . . . . . . 
                . . . . . c b a f c a c . . . . 
                . . . . c b b b f f a c c . . . 
                . . . . b b f a b b a a c . . . 
                . . . . c b f f b a f c a . . . 
                . . . . . c a a c b b a . . . . 
                . . . . . . c c c c . . . . . . 
                . . . . . . . c . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 165, 0)
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . f f f f f . . . . 
                . . . . . . f e e e e e f . . . 
                . . . . . f e e e d d d d f . . 
                . . . . f f e e d f d d f d c . 
                . . . f d d e e d f d d f d c . 
                . . . c d b e e d d d d e e d c 
                f f . c d b e e d d c d d d d c 
                f e f . c f e e d d d c c c c c 
                f e f . . f f e e d d d d d f . 
                f e f . f e e e e f f f f f . . 
                f e f f e e e e e e e f . . . . 
                . f f e e e e f e f f e f . . . 
                . . f e e e e f e f f e f . . . 
                . . . f e f f b d f b d f . . . 
                . . . f d b b d d c d d f . . . 
                . . . f f f f f f f f f . . . . 
                `],
            500,
            false
            )
            Manabar.value += -10
        })
    } else if (Direction == 2) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e f c . . . . 
            . f d d d d e e e f f . . . . . 
            . . f f f f f e e e e f . . . . 
            . . . . f f e e e e e e f . f f 
            . . . f e e f e e f e e f . e f 
            . . f e e f e e f e e e f . e f 
            . f b d f d b f b b f e f f e f 
            . f d d f d d f d d b e f f f f 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e f c . . . . 
            . f d d d d e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . . f f f f f e e e e e f . f f 
            . . f d b f e e f f e e f . e f 
            . f f d d f e f f e e e f . e f 
            . f f f f f f e b b f e f f e f 
            . f d d f e e e d d b e f f f f 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . . . f f f f f . . . . . . 
            . . . . f e e e e e f . . . . . 
            . . . f d d d d d e e f . . . . 
            . . f f f d d f f d e f f . . . 
            . c d d e e d d d d e d d f . . 
            . c c d d d d c d d e d f f f . 
            . c d c c c c d d d e d f b d f 
            . . c d d d d d d e e f f d d f 
            . . . c d d d d e e f f e f f f 
            . . . . f f f e e f e e e f . . 
            . . . . f e e e e e e e f f f . 
            . . . f e e e e e e f f f e f . 
            . . f f e e e e f f f f f e f . 
            . f b d f e e f b b f f f e f . 
            . f d d f e e f d d b f f f f . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . f f f f f . . . . . . 
            . . . . f e e e e e f . . . . . 
            . . . f d d d d d d e f . . . . 
            . . f d f f d d f f d f f . . . 
            . c d d d e e d d d d e d f . . 
            . c d c d d d d c d d e f f . . 
            . c d d c c c c d d d e f f f f 
            . . c d d d d d d d e f f b d f 
            . . . c d d d d e e f f f d d f 
            . . . . f f f e e f e e e f f f 
            . . . . f e e e e e e e f f f . 
            . . . f e e e e e e f f f e f . 
            . . f f e e e e f f f f f e f . 
            . f b d f e e f b b f f f e f . 
            . f d d f f f f d d b f f f f . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . . f d d d d d e e f f . . . . 
            . c d d d f f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c f f d d c d d e e b d c . . . 
            f d d f e f f f e e e f . . . . 
            f d d f e e e f f f f f . . . . 
            f f f f f e e e e e f f . f f . 
            . f f f e f f e e e f f . e f . 
            . f b d f e f f b b f f f e f . 
            . f d d f e e f d d b f f e f . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . . f d d f d d e e f f . . . . 
            . c d d d f d d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . . . 
            c f f f f d d d e e f c f . . . 
            . f b d f f f e e e e f . . . . 
            . f d d f e f f f e e f . . . . 
            . . f f f e e e e f f f . f f . 
            . . f e e f e e e e f f . e f . 
            . f f e e e f f f f f f f e f . 
            . f b d f e e f b b f f f e f . 
            . f d d f f e e d d b f f f f . 
            . f f f f f f f f f f f f f . . 
            `],
        100,
        false
        )
        timer.after(500, function () {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . c c c . . . . . . 
                . . . . . . a b a a . . . . . . 
                . . . . . c b a f c a c . . . . 
                . . . . c b b b f f a c c . . . 
                . . . . b b f a b b a a c . . . 
                . . . . c b f f b a f c a . . . 
                . . . . . c a a c b b a . . . . 
                . . . . . . c c c c . . . . . . 
                . . . . . . . c . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -165, 0)
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . f f f f f . . . . . . . 
                . . . f e e e e e f . . . . . . 
                . . f d d d d e e e f . . . . . 
                . c d f d d f d e e f f . . . . 
                . c d f d d f d e e d d f . . . 
                c d e e d d d d e e b d c . . . 
                c d d d d c d d e e b d c . f f 
                c c c c c d d d e e f c . f e f 
                . f d d d d d e e f f . . f e f 
                . . f f f f f e e e e f . f e f 
                . . . . f e e e e e e e f f e f 
                . . . f e f f e f e e e e f f . 
                . . . f e f f e f e e e e f . . 
                . . . f d b f d b f f e f . . . 
                . . . f d d c d d b b d f . . . 
                . . . . f f f f f f f f f . . . 
                `],
            500,
            false
            )
            Manabar.value += -10
        })
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `],
    500,
    false
    )
    Direction = 1
})
browserEvents.Z.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (Direction == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . . f e e d f d d f d c . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            f f . c d b e e e d d c c c c c 
            f e f . c f f e e e d d d d f . 
            f e f . f e e e e f f f f f f . 
            f e f f e e e e e e e f f f f . 
            . f f e e e e f e f d d f d d f 
            . . f e e e e f e f b d f b d f 
            . . f e f f f f f f f f f f f f 
            . . f d d c f . . . . . . . . . 
            . . f f f f . . . . . . . . . . 
            `],
        100,
        false
        )
        timer.after(500, function () {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . f f f f f . . . . 
                . . . . . . f e e e e e f . . . 
                . . . . . f e e e d d d d f . . 
                . . . . f f e e d f d d f d c . 
                . . . f d d e e d f d d f d c . 
                . . . c d b e e d d d d e e d c 
                f f . c d b e e d d c d d d d c 
                f e f . c f e e d d d c c c c c 
                f e f . . f f e e d d d d d f . 
                f e f . f e e e e f f f f f . . 
                f e f f e e e e e e e f . . . . 
                . f f e e e e f e f f e f . . . 
                . . f e e e e f e f f e f . . . 
                . . . f e f f b d f b d f . . . 
                . . . f d b b d d c d d f . . . 
                . . . f f f f f f f f f . . . . 
                `],
            500,
            false
            )
        })
    } else if (Direction == 2) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            c d e e d d d d e e d d f . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e b d c . f f 
            . f d d d d e e e f f c . f e f 
            . f f f f f f e e e e f . f e f 
            . f f f f e e e e e e e f f e f 
            f d d f d d f e f e e e e f f . 
            f d b f d b f e f e e e e f . . 
            f f f f f f f f f f f f e f . . 
            . . . . . . . . . f c d d f . . 
            . . . . . . . . . . f f f f . . 
            `],
        100,
        false
        )
        timer.after(500, function () {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . f f f f f . . . . . . . 
                . . . f e e e e e f . . . . . . 
                . . f d d d d e e e f . . . . . 
                . c d f d d f d e e f f . . . . 
                . c d f d d f d e e d d f . . . 
                c d e e d d d d e e b d c . . . 
                c d d d d c d d e e b d c . f f 
                c c c c c d d d e e f c . f e f 
                . f d d d d d e e f f . . f e f 
                . . f f f f f e e e e f . f e f 
                . . . . f e e e e e e e f f e f 
                . . . f e f f e f e e e e f f . 
                . . . f e f f e f e e e e f . . 
                . . . f d b f d b f f e f . . . 
                . . . f d d c d d b b d f . . . 
                . . . . f f f f f f f f f . . . 
                `],
            500,
            false
            )
        })
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `],
    500,
    false
    )
    Direction = 2
})
function Portals () {
    TP_Portal = sprites.create(assets.image`Portal`, SpriteKind.Portal)
    if (Map == 1) {
        Primordial_Portal = sprites.create(assets.image`Portal_2`, SpriteKind.Portal)
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        c d e e d d d d e e d d f . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e b d c . f f 
        . f d d d d e e e f f c . f e f 
        . f f f f f f e e e e f . f e f 
        . f f f f e e e e e e e f f e f 
        f d d f d d f e f e e e e f f . 
        f d b f d b f e f e e e e f . . 
        f f f f f f f f f f f f e f . . 
        . . . . . . . . . f c d d f . . 
        . . . . . . . . . . f f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f f . . . . 
        . c d d d d d d e e d d f . . . 
        . c d f d d f d e e b d c . . . 
        c d d f d d f d e e b d c . f f 
        c d e e d d d d e e f c . f e f 
        c d d d d c d e e e f . . f e f 
        . f c c c d e e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . f f e f e e f e e e e f . . 
        . f e f f e e f f f e e e f . . 
        f d d b d d c f f f f f f b f . 
        f d d c d d d f . . f c d d f . 
        . f f f f f f f . . . f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f f f . . . . 
        . . f d d d e e e e d d f . . . 
        . c d d d d d e e e b d c . . . 
        . c d d d d d d e e b d c . . . 
        c d d f d d f d e e f c . f f . 
        c d d f d d f d e e f . . f e f 
        c d e e d d d d e e f . . f e f 
        . f d d d c d e e f f . . f e f 
        . . f f f d e e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . . . f f e e e e e b f f . . 
        . . . f e f f e e c d d f f . . 
        . . f d d b d d c f f f . . . . 
        . . f d d c d d d f f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `],
    60,
    true
    )
    Direction = 2
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Portal, function (sprite, otherSprite) {
    if (Map == 0) {
        if (mySprite.overlapsWith(TP_Portal)) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 2))
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . . f e e d f d d f d c . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        f f . c d b e e e d d c c c c c 
        f e f . c f f e e e d d d d f . 
        f e f . f e e e e f f f f f f . 
        f e f f e e e e e e e f f f f . 
        . f f e e e e f e f d d f d d f 
        . . f e e e e f e f b d f b d f 
        . . f e f f f f f f f f f f f f 
        . . f d d c f . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . f f e e e d d d d f . . 
        . . . f d d e e d d d d d d c . 
        . . . c d b e e d f d d f d c . 
        f f . c d b e e d f d d f d d c 
        f e f . c f e e d d d d e e d c 
        f e f . . f e e e d c d d d d c 
        f e f . . f f e e e d c c c f . 
        f e f . f e e e e f f f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f e e e e f e e f e f f . . 
        . . f e e e f f f e e f f e f . 
        . f b f f f f f f c d d b d d f 
        . f d d c f . . f d d d c d d f 
        . . f f f . . . f f f f f f f . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . f f f e e e e e f . . . 
        . . . f d d e e e e d d d f . . 
        . . . c d b e e e d d d d d c . 
        . . . c d b e e d d d d d d c . 
        . f f . c f e e d f d d f d d c 
        f e f . . f e e d f d d f d d c 
        f e f . . f e e d d d d e e d c 
        f e f . . f f e e d c d d d f . 
        f e f . f e e e e e d f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f f b e e e e e f f . . . . 
        . . f f d d c e e f f e f . . . 
        . . . . f f f c d d b d d f . . 
        . . . . . f f d d d c d d f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        . . . . c f e e e d d c c c c c 
        . . . . . f f e e e d d d d f . 
        . . . . f e e e e f f f f f . . 
        f f . f e e e e e e f f . . . . 
        f e . f e e f e e f e e f . . . 
        f e . f e e e f e e f e e f . . 
        f e f f e f b b f b d f d b f . 
        f f f f e b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `],
    60,
    true
    )
    Direction = 1
})
function Maps () {
    tiles.setCurrentTilemap(tilemap`level1`)
}
function Player_Functions () {
    mySprite = platformer.create(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `, SpriteKind.Player)
    platformer.moveSprite(mySprite, true, 85)
    platformer.setGravityEnabled(mySprite, true)
    platformer.jump(mySprite, 33)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 17))
    Healthbar = statusbars.create(15, 1.5, StatusBarKind.Health)
    Healthbar.attachToSprite(mySprite, 1, 0)
    Healthbar.setColor(7, 2, 2)
    Healthbar.value = 100
    Manabar = statusbars.create(13, 1, StatusBarKind.Energy)
    Manabar.attachToSprite(mySprite, 3, 0)
    Manabar.setColor(9, 15, 15)
    Manabar.value = 100
    mySprite.setVelocity(0, 1000)
    scene.cameraFollowSprite(mySprite)
    timer.after(750, function () {
        mySprite.setVelocity(0, 0)
    })
}
let Healthbar: StatusBarSprite = null
let Primordial_Portal: Sprite = null
let TP_Portal: Sprite = null
let Manabar: StatusBarSprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
let Map = 0
let Direction = 0
Maps()
Player_Functions()
Direction = 0
Map = 0
Portals()
game.onUpdate(function () {
    if (Map == 0) {
        tiles.placeOnTile(TP_Portal, tiles.getTileLocation(13, 14))
    } else if (Map == 1) {
        tiles.placeOnTile(TP_Portal, tiles.getTileLocation(0, 0))
        tiles.placeOnTile(Primordial_Portal, tiles.getTileLocation(0, 0))
    }
})
