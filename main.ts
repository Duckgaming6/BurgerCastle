namespace SpriteKind {
    export const Laser = SpriteKind.create()
    export const Ghost = SpriteKind.create()
    export const End_time = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.End_time, SpriteKind.Player, function (sprite, otherSprite) {
    game.setGameOverMessage(false, "TIMES UP!")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    game.showLongText("Jump on the red goober to progress (he's mean >=(.) But this goober will get mad when you jump on him, when hes mad he will try to summon a burger demon to kill you (do you see what I mean?), after you jump on him,  get back to the start to escape!", DialogLayout.Bottom)
    mySprite.x += -20
    if (_2playing == 1) {
        Player2.x += -20
    }
    if (_3playing == 1) {
        Player3.x += -20
    }
    if (_4playing == 1) {
        Player4.x += -20
    }
})
controller.player4.onEvent(ControllerEvent.Connected, function () {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    _3connected = 1
    Notification.notify("Player 4 joined! ", 10, img`
        7 7 7 7 7 7 1 1 1 7 7 1 1 7 7 1 
        7 7 7 7 7 7 1 1 1 7 7 1 1 7 7 1 
        7 7 1 1 1 1 7 7 1 7 7 1 1 7 7 1 
        7 7 1 1 1 1 7 7 1 7 7 1 1 7 7 1 
        7 7 1 1 1 1 7 7 1 7 7 1 1 7 7 1 
        7 7 1 1 1 1 7 7 1 7 7 1 1 7 7 1 
        7 7 7 7 7 7 7 7 1 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 1 7 7 7 7 7 7 7 
        7 7 1 1 1 1 1 1 1 1 1 1 1 7 7 1 
        7 7 1 1 1 1 1 1 1 1 1 1 1 7 7 1 
        7 7 1 1 1 1 1 1 1 1 1 1 1 7 7 1 
        7 7 1 1 1 1 1 1 1 1 1 1 1 7 7 1 
        7 7 1 1 1 1 1 1 1 1 1 1 1 7 7 1 
        7 7 1 1 1 1 1 1 1 1 1 1 1 7 7 1 
        7 7 1 1 1 1 1 1 1 1 1 1 1 7 7 1 
        7 7 1 1 1 1 1 1 1 1 1 1 1 7 7 1 
        `)
})
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (_3playing == 1 && statusbar3.value == 100) {
        music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
        Zombo = sprites.createProjectileFromSide(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .....ffff111111bf.......
            ....fc111cdb1bdfff......
            ....f1b1bcbfbfc111cf....
            ....fbfbfbffff1b1b1f....
            .........fffffffbfbf....
            ..........fffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, 12, 17)
        Zombo.setKind(SpriteKind.Ghost)
        Zombo.follow(mySprite, 50)
        Zombo.setFlag(SpriteFlag.GhostThroughWalls, true)
        Zombo.setFlag(SpriteFlag.GhostThroughTiles, true)
        statusbar3.value = 0
        animation.runImageAnimation(
        Player3,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 5 f . . . 
            . . . f f e e e e f 5 5 5 f . . 
            . . . f e e e f f 5 5 5 5 f . . 
            . . . f f f f 5 5 5 5 5 5 5 f . 
            . . . f 5 5 5 5 f f f f 5 5 f . 
            . 7 f f f f f f f e e e f f 7 . 
            . 7 f 7 e 4 4 e b f 4 4 7 e 7 . 
            . . f 7 e 7 d 4 1 a 7 d 7 f . . 
            . . . f e 7 e 7 7 d 7 d f . . . 
            . . . . f f 7 7 7 7 4 e f . . . 
            . . . . 7 4 7 d e 7 5 7 f . . . 
            . . 7 . 7 e d d e 5 5 7 f 7 . . 
            . . 7 . . f e e f 5 4 4 f 7 . . 
            7 . . . . . f f f f f f . . . 7 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 5 f . . . 
            . . . f f e e e e f 5 5 5 f . . 
            . . . f e e e f f 5 5 5 5 f . . 
            . . . f f f f 5 5 5 5 5 5 5 f . 
            . 7 . f 5 5 5 5 f f f f 5 5 7 . 
            . 7 f 7 f f f f f e e e 7 f 7 . 
            . 7 f 7 e 7 4 e b f 7 4 7 e 7 . 
            . . f 7 e 7 d 7 7 a 7 d 7 f . . 
            . . . f e 7 7 7 7 7 7 d f . . . 
            . . . . 7 f 7 7 7 7 4 7 f . . . 
            . . 7 . 7 4 7 d e 7 5 7 f 7 . . 
            . . 7 . 7 e d d e 5 5 7 f 7 . . 
            . . 7 . . f e e f 5 4 4 f 7 . . 
            7 . . . . . f f f f f f . . . 7 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 5 f . . . 
            . . . f f e e e e f 5 5 5 f . . 
            . . . f e e e f f 5 5 5 5 f . . 
            . 7 . f f f f 5 5 5 5 5 5 5 7 . 
            . 7 . 7 5 5 5 5 f f f f 7 5 7 . 
            . 7 f 7 f 7 f f f e 7 e 7 f 7 . 
            . 7 f 7 e 7 4 7 7 f 7 4 7 e 7 . 
            . . f 7 e 7 7 7 7 7 7 d 7 f . . 
            . . . f 7 7 7 7 7 7 7 7 f . . . 
            . . 7 . 7 f 7 7 7 7 4 7 f 7 . . 
            . . 7 . 7 4 7 d e 7 5 7 f 7 . . 
            . . 7 . 7 e d d e 5 5 7 f 7 . . 
            . . 7 . . f e e f 5 4 4 f 7 . . 
            7 . . . . . f f f f f f . . . 7 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 5 f . . . 
            . . . f f e e e e f 5 5 5 f . . 
            . 7 . f e e e f f 5 5 5 5 f 7 . 
            . 7 . 7 f f f 5 5 5 5 5 7 5 7 . 
            . 7 . 7 5 7 5 5 f f 7 f 7 5 7 . 
            . 7 f 7 f 7 f 7 7 e 7 e 7 f 7 . 
            . 7 f 7 e 7 7 7 7 7 7 4 7 e 7 . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . 7 f 7 7 7 7 7 7 7 7 f 7 . . 
            . . 7 . 7 f 7 7 7 7 4 7 f 7 . . 
            . . 7 . 7 4 7 d e 7 5 7 f 7 . . 
            . . 7 . 7 e d d e 5 5 7 f 7 . . 
            . . 7 . . f e e f 5 4 4 f 7 . . 
            7 . . . . . f f f f f f . . . 7 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 5 5 5 f . . 
            . . . f e e e f f 5 5 5 5 f . . 
            . . . f f f f 5 5 5 5 5 5 5 f . 
            . . . f 5 5 5 5 f f f f 5 5 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 7 d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 5 5 5 f . . . 
            . . . . . e d d e 5 5 5 f . . . 
            . . . . . f e e f 5 4 4 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `],
        200,
        false
        )
    } else if (_3playing == 1) {
        Player3.sayText("On cooldown...", 500, true)
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile10`, function (sprite, location) {
    sprites.destroy(bounce, effects.disintegrate, 500)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (_2playing == 1 && (statusbar2.value == 100 && Right == 1)) {
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        controller.player2.moveSprite(Player2, 0, 0)
        Player2.setVelocity(100, -30)
        statusbar2.value = 0
        animation.runImageAnimation(
        Player2,
        [img`
            . 9 . . 9 f 9 9 9 9 9 9 9 9 . . 
            . . f f e e e e 9 9 8 8 8 9 9 . 
            . f 9 e e 9 e f 8 8 9 8 8 8 9 . 
            . f e e 9 f f 8 8 8 8 9 8 8 9 9 
            9 f f f f 8 8 8 8 8 8 8 9 8 8 9 
            . f 8 8 8 8 f f f f 8 8 f 9 8 9 
            f f f 9 f f f e e e f f f 9 8 9 
            f f e 4 4 9 b f 4 4 9 e f 9 8 9 
            f e e 4 9 4 1 f d d e f . 9 8 9 
            . 9 e e e 4 d d 9 d f . . 9 8 9 
            . . f f e 9 4 4 4 e f . . 9 8 9 
            9 . . 4 d d e 8 9 8 f . 9 8 9 9 
            . . . e d 9 e 8 8 8 f 9 8 8 9 . 
            . 9 9 f e e f 8 5 9 f 9 8 9 9 . 
            . . . . f f f f f f 9 8 9 9 . . 
            . . . . . f f f . 9 9 9 9 . . . 
            `,img`
            9 . . 9 . f 9 9 9 9 9 9 9 9 . . 
            . . f f e e e e 9 9 8 8 8 9 9 . 
            9 f e e e e e f 8 8 9 8 8 8 9 . 
            . f 9 e e f f 8 8 8 8 9 8 8 9 9 
            . 9 f f f 8 9 8 8 9 8 8 9 8 8 9 
            . f 8 8 8 8 f f f f 8 8 f 9 8 9 
            f f f f 9 f f e e e f f f 9 8 9 
            f 9 e 4 4 4 b f 4 9 4 4 f 9 8 9 
            f e e 4 9 4 1 f d d e f . 9 8 9 
            . . 9 e e 4 d 9 d d f . . 9 8 9 
            . . 9 f e 4 4 4 4 e f . . 9 8 9 
            9 . . 4 d 9 e 8 8 9 f . 9 8 9 9 
            . . . e d d e 8 8 8 f 9 8 8 9 . 
            9 . . f e e f 8 5 5 f 9 8 9 9 . 
            . . 9 . f f f f 9 f 9 8 9 9 . . 
            . . . . . f f f . 9 9 9 9 . . . 
            `,img`
            . . 9 . . f 9 9 9 9 9 9 9 9 . . 
            9 . f f e e e e 9 9 8 8 8 9 9 . 
            . f e 9 e e e f 8 8 9 8 8 8 9 . 
            . f e e e f f 8 8 8 8 9 8 8 9 9 
            9 . f f f 8 8 9 8 8 8 8 9 8 8 9 
            . f 9 8 8 8 f f f f 8 8 f 9 8 9 
            f f f f f 9 f e e e f f f 9 8 9 
            f e e 4 4 4 b f 4 4 4 4 f 9 8 9 
            f e e 4 4 4 1 f 9 d e f . 9 8 9 
            9 . 9 e e 4 d 9 d d f . . 9 8 9 
            . . . f e 4 4 4 4 e f . . 9 8 9 
            . . 9 4 d d e 8 8 8 f . 9 8 9 9 
            . . . e d d e 8 9 8 f 9 8 8 9 . 
            . . . f 9 e f 8 5 9 f 9 8 9 9 . 
            . 9 . . f f f 9 f f 9 8 9 9 . . 
            . . . . . f f f 1 9 9 9 9 . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 8 f . . . 
            . . . f f e e e e f 8 8 8 f . . 
            . . . f e e e f f 8 8 8 8 f . . 
            . . . f f f f 8 8 8 8 8 8 8 f . 
            . . . f 8 8 8 8 f f f f 8 8 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 a d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 8 8 8 f . . . 
            . . . . . e d d e 8 8 8 f . . . 
            . . . . . f e e f 8 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `],
        100,
        false
        )
        pause(1000)
        if (mySprite.vy > 0 && (!(mySprite.isHittingTile(CollisionDirection.Bottom)) || mySprite.y < Zombo.top)) {
            mySprite.setVelocity(-2, -100)
            Zombo.setVelocity(31, 31)
        } else {
            scene.cameraShake(8, 500)
            animation.runImageAnimation(
            Zombo,
            [img`
                ........................
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .....fffc1111111f.......
                ...fc111cd1111111f......
                ...f1b1b1b1111dddf......
                ...fbfbffcf11fcddf......
                ......fcf111111bbf......
                .......ccbdb1b1fcf......
                .......fffbfbfdff.......
                ........ffffffff........
                ........fffffffffff.....
                .........fffffc111cf....
                .........fffff1b1b1f....
                ..........ffffbfbfbf....
                ...........ffff.........
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ....7.fd11111111df......
                ...7..fd11111111df......
                ...7..fd11111111df......
                ...7..fddd1111dddff.....
                ...77.fbdbfddfbdbfcf....
                ...777fcdcf11fcdcfbf....
                ....77fffbdb1bdffcf.....
                ....fcb1bcffffff........
                ....f1c1c1ffffff........
                ....fdfdfdfffff.........
                .....f.f.f..............
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd111111111f......
                ......fd11111111df......
                ......fd11111111df......
                ......fcdd1111ddcff.....
                .......fbcf11fcbfbbf....
                .......ffbdb1bdffff.....
                ........fcbfbfdf........
                ........ffffffff........
                ......ffffffffff........
                .....fcb1bcffff.........
                ......ffbff.............
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fdd111111ddf......
                ......fbdd1111dddf......
                ......fcdbfddfbdbf......
                .......fbcf11fcbfff.....
                .......ffb1111bcfbcf....
                ........fcdb1bdfbbbf....
                .......ffffffffffcf.....
                .....fcb1bcfffff........
                .....f1b1b1ffff.........
                ......ffbff.............
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ......fffcdb1bdffff.....
                ....fc111cbfbfc111cf....
                ....f1b1b1ffff1b1b1f....
                ....fbfbffffffbfbfbf....
                .........ffffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `],
            250,
            false
            )
            music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
            mySprite.setVelocity(randint(-200, 100), randint(-200, 100))
            if (_4playing == 1) {
                Player4.setVelocity(randint(-100, 100), randint(-100, 100))
            }
            if (_3playing == 1) {
                Player3.setVelocity(randint(-100, 100), randint(-100, 100))
            }
            if (_2playing == 1) {
                Player2.setVelocity(randint(-100, 100), randint(-100, 100))
            }
            pause(2000)
        }
        controller.player2.moveSprite(Player2, 79, 0)
    } else if (_2playing == 1 && (statusbar2.value == 100 && Left == 1)) {
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        controller.player2.moveSprite(Player2, 0, 0)
        Player2.setVelocity(-100, -30)
        statusbar2.value = 0
        animation.runImageAnimation(
        Player2,
        [img`
            . . 9 9 9 9 9 9 9 9 f 9 . . 9 . 
            . 9 9 8 8 8 9 9 e e e e f f . . 
            . 9 8 8 8 9 8 8 f e 9 e e 9 f . 
            9 9 8 8 9 8 8 8 8 f f 9 e e f . 
            9 8 8 9 8 8 8 8 8 8 8 f f f f 9 
            9 8 9 f 8 8 f f f f 8 8 8 8 f . 
            9 8 9 f f f e e e f f f 9 f f f 
            9 8 9 f e 9 4 4 f b 9 4 4 e f f 
            9 8 9 . f e d d f 1 4 9 4 e e f 
            9 8 9 . . f d 9 d d 4 e e e 9 . 
            9 8 9 . . f e 4 4 4 9 e f f . . 
            9 9 8 9 . f 8 9 8 e d d 4 . . 9 
            . 9 8 8 9 f 8 8 8 e 9 d e . . . 
            . 9 9 8 9 f 9 5 8 f e e f 9 9 . 
            . . 9 9 8 9 f f f f f f . . . . 
            . . . 9 9 9 9 . f f f . . . . . 
            `,img`
            . . 9 9 9 9 9 9 9 9 f . 9 . . 9 
            . 9 9 8 8 8 9 9 e e e e f f . . 
            . 9 8 8 8 9 8 8 f e e e e e f 9 
            9 9 8 8 9 8 8 8 8 f f e e 9 f . 
            9 8 8 9 8 8 9 8 8 9 8 f f f 9 . 
            9 8 9 f 8 8 f f f f 8 8 8 8 f . 
            9 8 9 f f f e e e f f 9 f f f f 
            9 8 9 f 4 4 9 4 f b 4 4 4 e 9 f 
            9 8 9 . f e d d f 1 4 9 4 e e f 
            9 8 9 . . f d d 9 d 4 e e 9 . . 
            9 8 9 . . f e 4 4 4 4 e f 9 . . 
            9 9 8 9 . f 9 8 8 e 9 d 4 . . 9 
            . 9 8 8 9 f 8 8 8 e d d e . . . 
            . 9 9 8 9 f 5 5 8 f e e f . . 9 
            . . 9 9 8 9 f 9 f f f f . 9 . . 
            . . . 9 9 9 9 . f f f . . . . . 
            `,img`
            . . 9 9 9 9 9 9 9 9 f . . 9 . . 
            . 9 9 8 8 8 9 9 e e e e f f . 9 
            . 9 8 8 8 9 8 8 f e e e 9 e f . 
            9 9 8 8 9 8 8 8 8 f f e e e f . 
            9 8 8 9 8 8 8 8 9 8 8 f f f . 9 
            9 8 9 f 8 8 f f f f 8 8 8 9 f . 
            9 8 9 f f f e e e f 9 f f f f f 
            9 8 9 f 4 4 4 4 f b 4 4 4 e e f 
            9 8 9 . f e d 9 f 1 4 4 4 e e f 
            9 8 9 . . f d d 9 d 4 e e 9 . 9 
            9 8 9 . . f e 4 4 4 4 e f . . . 
            9 9 8 9 . f 8 8 8 e d d 4 9 . . 
            . 9 8 8 9 f 8 9 8 e d d e . . . 
            . 9 9 8 9 f 9 5 8 f e 9 f . . . 
            . . 9 9 8 9 f f 9 f f f . . 9 . 
            . . . 9 9 9 9 1 f f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 8 f e e e e f f . . . . 
            . . f 8 8 8 f e e e e f f . . . 
            . . f 8 8 8 8 f f e e e f . . . 
            . f 8 8 8 8 8 8 8 f f f f . . . 
            . f 8 8 f f f f 8 8 8 8 f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d a 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 8 8 8 e d d 4 . . . . . 
            . . . f 8 8 8 e d d e . . . . . 
            . . . f 5 5 8 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `],
        100,
        false
        )
        pause(1000)
        controller.player2.moveSprite(Player2, 79, 0)
    } else if (_2playing == 1) {
        Player2.sayText("On cooldown...", 500, true)
    }
})
controller.player3.onEvent(ControllerEvent.Disconnected, function () {
    if (_3playing == 1) {
        Player3.startEffect(effects.fire, 500)
        Player3.startEffect(effects.fire, 500)
        Player3.startEffect(effects.fire, 500)
        Player3.startEffect(effects.fire, 500)
        Player3.startEffect(effects.fire, 500)
        sprites.destroy(Player3, effects.fire, 500)
    }
    Notification.notify("Player 3 disconnected...", 5, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 5 5 5 1 1 1 5 5 5 5 2 2 2 
        2 2 2 2 1 1 5 5 1 5 5 1 2 2 2 2 
        2 5 2 2 2 1 5 5 1 5 5 2 2 2 5 2 
        2 5 1 2 2 2 5 5 1 1 2 2 2 1 5 2 
        2 5 1 1 2 2 2 5 1 2 2 2 1 1 5 2 
        2 5 5 5 5 2 2 2 2 2 2 1 1 5 5 2 
        2 5 5 5 5 5 2 2 2 2 5 5 5 5 5 2 
        2 5 1 1 1 1 2 2 2 2 5 5 5 5 1 2 
        2 5 1 1 1 2 2 2 2 2 2 5 5 5 5 2 
        2 5 1 1 2 2 2 1 1 2 2 2 1 5 5 2 
        2 5 1 2 2 2 1 1 1 1 2 2 2 1 5 2 
        2 5 2 2 2 1 1 1 1 5 5 2 2 2 5 2 
        2 2 2 2 1 1 1 1 1 5 5 1 2 2 2 2 
        2 2 2 1 1 1 1 1 1 5 5 5 5 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
})
controller.player4.onEvent(ControllerEvent.Disconnected, function () {
    if (_4playing == 1) {
        Player4.startEffect(effects.fire, 500)
        Player4.startEffect(effects.fire, 500)
        Player4.startEffect(effects.fire, 500)
        Player4.startEffect(effects.fire, 500)
        Player4.startEffect(effects.fire, 500)
        sprites.destroy(Player4, effects.fire, 500)
    }
    Notification.notify("Player 4 disconnected...", 5, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 7 7 7 1 1 1 7 7 1 1 7 2 2 
        2 2 2 2 1 1 7 7 1 7 7 1 1 2 2 2 
        2 7 2 2 2 1 7 7 1 7 7 1 2 2 2 2 
        2 7 1 2 2 2 7 7 1 7 7 2 2 2 7 2 
        2 7 1 1 2 2 2 7 1 7 2 2 2 7 7 2 
        2 7 7 7 7 2 2 2 1 2 2 2 7 7 7 2 
        2 7 7 7 7 7 2 2 2 2 2 7 7 7 7 2 
        2 7 1 1 1 1 2 2 2 2 1 1 1 7 7 2 
        2 7 1 1 1 2 2 2 2 2 2 1 1 7 7 2 
        2 7 1 1 2 2 2 1 1 2 2 2 1 7 7 2 
        2 7 1 2 2 2 1 1 1 1 2 2 2 7 7 2 
        2 7 2 2 2 1 1 1 1 1 1 2 2 2 7 2 
        2 2 2 2 1 1 1 1 1 1 1 1 2 2 2 2 
        2 2 2 1 1 1 1 1 1 1 1 1 1 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ghost, function (sprite, otherSprite) {
	
})
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (_4playing == 1 && (statusbar4.value > 50 && Right2 == 1)) {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
        animation.runImageAnimation(
        Player4,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . f f e e e e f 7 f . . . . . 
            . f f e e e e f 7 7 7 f . . . . 
            . f e e e f f 7 7 7 7 f . . . . 
            . f f f f 7 7 7 7 7 7 7 f . . . 
            . f 7 7 7 7 f f f f 7 7 f . . . 
            f f f f f f f e e e f f f . . . 
            f f e 4 4 e b f 4 4 e e f . . . 
            f e e 4 d 4 1 2 d d e f e e . . 
            . f e e e 4 d d d d f 4 d d e . 
            . . 4 d d e 7 7 7 7 f e d d e . 
            . . e d d e 7 7 7 7 f . e e . . 
            . . f e e f 7 7 2 2 f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f . . . f f f . . . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 7 f . . . 
            . . . f f e e e e f 7 7 7 f . . 
            . . . f e e e f f 7 7 7 7 f . . 
            . . . f f f f 7 7 7 7 7 7 7 f . 
            . . . f 7 7 7 7 f f f f 7 7 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 8 d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 7 7 7 f . . . 
            . . . . . e d d e 7 7 7 f . . . 
            . . . . . f e e f 7 2 2 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `],
        300,
        false
        )
        statusbar4.value += -75
        mySprite2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . 2 2 2 1 1 1 1 2 . . 
            . . . . 2 2 3 3 1 1 1 1 1 1 2 . 
            . . 2 2 3 3 1 1 1 1 1 1 1 1 2 . 
            . . 3 3 1 1 1 1 1 1 1 1 1 1 2 . 
            . . 2 2 2 3 3 1 1 1 1 1 1 1 2 . 
            . . . . . . 2 2 3 1 1 1 1 2 . . 
            . . . . . . . . 2 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Player4, randint(75, 200), randint(-10, 10))
        mySprite2.setFlag(SpriteFlag.DestroyOnWall, true)
    } else if (_4playing == 1 && (statusbar4.value > 50 && Left2 == 1)) {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
        statusbar4.value += -75
        animation.runImageAnimation(
        Player4,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . f 7 f e e e e f f . . 
            . . . . f 7 7 7 f e e e e f f . 
            . . . . f 7 7 7 7 f f e e e f . 
            . . . f 7 7 7 7 7 7 7 f f f f . 
            . . . f 7 7 f f f f 7 7 7 7 f . 
            . . . f f f e e e f f f f f f f 
            . . . f e e 4 4 f b e 4 4 e f f 
            . . e e f e d d 2 1 4 d 4 e e f 
            . e d d 4 f d d d d 4 e e e f . 
            . e d d e f 7 7 7 7 e d d 4 . . 
            . . e e . f 7 7 7 7 e d d e . . 
            . . . . f f 2 2 7 7 f e e f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f f . . . f f . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 7 f e e e e f f . . . . 
            . . f 7 7 7 f e e e e f f . . . 
            . . f 7 7 7 7 f f e e e f . . . 
            . f 7 7 7 7 7 7 7 f f f f . . . 
            . f 7 7 f f f f 7 7 7 7 f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d 8 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 7 7 7 e d d 4 . . . . . 
            . . . f 7 7 7 e d d e . . . . . 
            . . . f 2 2 7 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `],
        300,
        false
        )
        mySprite2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . 2 1 1 1 1 2 2 2 . . . . . . 
            . 2 1 1 1 1 1 1 3 3 2 2 . . . . 
            . 2 1 1 1 1 1 1 1 1 3 3 2 2 . . 
            . 2 1 1 1 1 1 1 1 1 1 1 3 3 . . 
            . 2 1 1 1 1 1 1 1 3 3 2 2 2 . . 
            . . 2 1 1 1 1 3 2 2 . . . . . . 
            . . . 2 2 2 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Player4, randint(-75, -200), randint(-10, 10))
        mySprite2.setFlag(SpriteFlag.DestroyOnWall, true)
        Pew = 0
    } else if (_4playing == 1) {
        Player4.sayText("On cooldown...", 500, true)
    }
})
controller.player3.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    if (_3playing == 1) {
        scene.cameraFollowSprite(Player3)
    }
})
controller.player1.onEvent(ControllerEvent.Disconnected, function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    info.changeScoreBy(1000)
    if (_2playing == 1) {
        tiles.placeOnRandomTile(Player2, assets.tile`myTile14`)
    }
    if (_3playing == 1) {
        tiles.placeOnRandomTile(Player3, assets.tile`myTile15`)
    }
    if (_4playing == 1) {
        tiles.placeOnRandomTile(Player4, assets.tile`myTile12`)
    }
    game.splash("LAP 2!!")
    tiles.setCurrentTilemap(tilemap`level15`)
    scene.cameraShake(6, 1000000)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile13`)
})
controller.player4.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    if (_4playing == 1) {
        scene.cameraFollowSprite(Player4)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    game.splash("LAP 3!!!")
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile13`)
    if (_2playing == 1) {
        tiles.placeOnRandomTile(Player2, assets.tile`myTile14`)
    }
    if (_3playing == 1) {
        tiles.placeOnRandomTile(Player3, assets.tile`myTile15`)
    }
    if (_4playing == 1) {
        tiles.placeOnRandomTile(Player4, assets.tile`myTile12`)
    }
    info.changeScoreBy(3000)
    tiles.setCurrentTilemap(tilemap`level12`)
    scene.cameraShake(8, 1000000)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (_2playing == 1 && Jump2 == 1) {
        Player2.setVelocity(0, -60)
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
        Jump2 = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    info.changeScoreBy(10000)
    console.log("i will be here forever until the void do us part.")
    game.splash("bruh r u crazy?", "FINAL LAP!!!!")
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile13`)
    if (_2playing == 1) {
        tiles.placeOnRandomTile(Player2, assets.tile`myTile14`)
    }
    if (_3playing == 1) {
        tiles.placeOnRandomTile(Player3, assets.tile`myTile15`)
    }
    if (_4playing == 1) {
        tiles.placeOnRandomTile(Player4, assets.tile`myTile12`)
    }
    tiles.setCurrentTilemap(tilemap`level9`)
    scene.cameraShake(8, 1000000)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    if (_2playing == 1) {
        scene.cameraFollowSprite(Player2)
    }
})
controller.player3.onEvent(ControllerEvent.Connected, function () {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    _2connected = 1
    Notification.notify("Player 3 joined! ", 10, img`
        5 5 5 5 5 5 1 1 1 1 5 5 5 5 5 1 
        5 5 5 5 5 5 1 1 1 5 5 5 5 5 5 5 
        5 5 1 1 1 1 5 5 1 5 5 1 1 1 5 5 
        5 5 1 1 1 1 5 5 1 5 5 1 1 1 5 5 
        5 5 1 1 1 1 5 5 1 1 1 1 1 1 5 5 
        5 5 1 1 1 1 5 5 1 1 1 1 1 1 5 5 
        5 5 5 5 5 5 5 5 1 1 1 1 1 5 5 1 
        5 5 5 5 5 5 5 5 1 1 5 5 5 5 5 1 
        5 5 1 1 1 1 1 1 1 1 5 5 5 5 1 1 
        5 5 1 1 1 1 1 1 1 1 1 5 5 5 5 1 
        5 5 1 1 1 1 1 1 1 1 1 1 1 5 5 5 
        5 5 1 1 1 1 1 1 1 1 1 1 1 1 5 5 
        5 5 1 1 1 1 1 1 1 5 5 1 1 1 5 5 
        5 5 1 1 1 1 1 1 1 5 5 1 1 1 5 5 
        5 5 1 1 1 1 1 1 1 5 5 5 5 5 5 5 
        5 5 1 1 1 1 1 1 1 1 1 5 5 5 5 1 
        `)
})
info.onCountdownEnd(function () {
    music.stopAllSounds()
    game.splash("He has summoned...")
    Time_over = sprites.create(img`
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . 4 4 4 4 4 4 4 4 . . . 
        . . 4 4 4 4 4 4 4 4 4 4 . . 
        . . . 2 2 2 2 2 2 2 2 . . . 
        . . a a a . a a a . a a . . 
        . . 7 7 7 7 7 7 7 7 7 7 . . 
        . . . e e e e e e e e . . . 
        . . 4 4 4 4 4 4 4 4 4 4 . . 
        . . . 4 4 4 4 4 4 4 4 . . . 
        `, SpriteKind.End_time)
    tiles.placeOnRandomTile(Time_over, assets.tile`myTile13`)
    Time_over.setFlag(SpriteFlag.GhostThroughWalls, true)
    Time_over.setFlag(SpriteFlag.GhostThroughTiles, true)
    Time_over.follow(mySprite, 100)
    music.play(music.createSong(hex`0078000408040405001c000f0a006400f4010a0000040000000000000000000000000000000002600000000800010c08001000010c10001800010c18002000010c20002800010d28003000010d30003800010d38004000010a40004800010a48005000010a50005800010c58006000010c60006800010c68007000010c70007800010d78008000010f06001c00010a006400f401640000040000000000000000000000000000000002660000000400012008000c00012010001400012018001c00012220002400012228002c00012230003400012238003c00011d40004400011d48004c00011b50005400011b58005c00011e60006400011e68006c00011e70007400011e78007c00011d7c008000011907001c00020a006400f401640000040000000000000000000000000000000003600000000800011208001000011210001800011218002000011220002800011628003000011630003800011638004000010f40004800010f48005000010f50005800011258006000011260006800011268007000011270007800011678008000011809010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800000300000100010601000200010602000300010603000400010604000500010605000600010606000700010607000800010608000900010609000a0001060a000b0001060b000c0001060c000d0001060d000e0001060e000f0001060f001000010610001100010611001200010612001300010613001400010614001500010615001600010616001700010617001800010618001900010619001a0001061a001b0001061b001c0001061c001d0001061d001e0001061e001f0001061f002000010620002100010621002200010622002300010623002400010624002500010625002600010626002700010627002800010628002900010629002a0001062a002b0001062b002c0001062c002d0001062d002e0001062e002f0001062f003000010630003100010631003200010632003300010633003400010634003500010635003600010636003700010637003800010638003900010639003a0001063a003b0001063b003c0001063c003d0001063d003e0001063e003f0001063f004000010640004100010641004200010642004300010643004400010644004500010645004600010646004700010647004800010648004900010649004a0001064a004b0001064b004c0001064c004d0001064d004e0001064e004f0001064f005000010650005100010651005200010652005300010653005400010654005500010655005600010656005700010657005800010658005900010659005a0001065a005b0001065b005c0001065c005d0001065d005e0001065e005f0001065f006000010660006100010661006200010662006300010663006400010664006500010665006600010666006700010667006800010668006900010669006a0001066a006b0001066b006c0001066c006d0001066d006e0001066e006f0001066f007000010670007100010671007200010672007300010673007400010674007500010675007600010676007700010677007800010678007900010679007a0001067a007b0001067b007c0001067c007d0001067d007e0001067e007f0001067f0080000106`), music.PlaybackMode.LoopingInBackground)
})
controller.player3.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (_3playing == 1) {
        Player3.setImage(img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 5 f . . . 
            . . . f f e e e e f 5 5 5 f . . 
            . . . f e e e f f 5 5 5 5 f . . 
            . . . f f f f 5 5 5 5 5 5 5 f . 
            . . . f 5 5 5 5 f f f f e 5 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 7 d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 5 5 5 f . . . 
            . . . . . e d d e 5 5 5 f . . . 
            . . . . . f e e f 5 4 4 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    game.showLongText("Do a leap of faith, (if you are player 1 or 2) press (A) then (B) when in mid air to do a powerup which will make you get to places easier. ", DialogLayout.Bottom)
    mySprite.x += -20
    if (_2playing == 1) {
        Player2.x += -20
    }
    if (_3playing == 1) {
        Player3.x += -20
    }
    if (_4playing == 1) {
        Player4.x += -20
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    music.play(music.createSong(hex`0064000408280900001c00010a006400f401640000040000000000000000000000000005000004240088018c0101188c019001011490019401011698019c0101189c01a0010114a001a401011601001c000f05001202c102c201000405002800000064002800031400060200042400d802e002012ae002e8020127e802f002012918032003012a20032803012728033003012903001c0001dc00690000045e0100040000000000000000000005640001040003a00208001000012910001800012518002000012728003000012930003800012538004000012748005000012950005800012558006000012768007000012a70007800012778008000012988009000012c9000980001299800a000012aa800ac00012cac00b000012ab000b400012cb400b800012ab800bc00012cbc00c000012ac000c4000129c400c8000125c800d0000127d000d8000127d800dc000127b701b8010116b801b9010116b901ba010116bb01bc010116bd01be010116be01bf010114bf01c0010116c101c20101160a020c02012c0c020e0201290e021002012a12021402012c14021602012916021802012a1a021c02012c1c021e0201291e022002012c26022802012c28022a0201292a022c02012a2e023002012c30023202012932023402012a36023802012c38023a0201293a023c02012a3e023f02012c3f024002012a41024202012c42024302012a4302440201294402450201294502460201294602470201294702480201294e025002012c50025202012952025402012a56025802012c58025a0201295a025c02012a5e026002012c60026202012962026402012a68026a02012c6a026c02012c6c026e0201296e027002012970027202012a72027402012a75027602012a76027702012a77027802012a78027902012a79027a02012a7a027b02012a7b027c02012a7c027d02012a7d027e02012a7e027f02012a7f028002012a80028102012a81028202012a82028302012a83028402012a84028502012a85028602012a86028702012a87028802012a88028902012a8b028c02012a8d028e02012a8f029002012a91029202012a93029402012a96029702012a99029a02012a9d029e020129a002a1020129a302a4020127a602a7020127a802a9020125ab02ac020125f8020003012700030803012408031003012504001c00100500640000041e000004000000000000000000000000000a040004e100a801a9010116aa01ab010116ac01ad010116ad01ae010116af01b0010116b101b2010116c801d0010120d001d8010124d801e0010327292ae001e8010327292ae801ec0103292a2cec01f00103292a2cf001f20103292a2cf201f40103292a2cf401f60103292a2cf701f80103292a2cf901fa0103292a2cfa01fb0103292a2cfb01fc0103292a2cfc01fd01012cfd01fe0102292afe01ff0103292a2cff01000203292a2c0002010203292a2c0102020203292a2c0202030203292a2c0302040203292a2c0402050203292a2c0502060203292a2cf8020003012700030803012405001c000f0a006400f4010a0000040000000000000000000000000000000002c00008001000012910001800012518002000012728003000012930003800012538004000012748005000012950005800012558006000012768007000012a70007800012778008000012988009000012c9000980001299800a000012aa800ac00012cac00b000012ab000b400012cb400b800012ab800bc00012cbc00c000012ac000c4000129c400c8000125c800d0000127d000d8000127d800dc000127f8020003012700030803012408031003012518032003012a20032803012728033003012906001c00010a006400f4016400000400000000000000000000000000000000024800e400e800010fe800ec00010ff400f800010f04010801010f08010c01010f800182010112d802e002012ae002e8020127e802f002012918032003012a20032803012728033003012907001c00020a006400f401640000040000000000000000000000000000000003e5008001820102122588018c01012c8c019001012990019401012a98019c01012c9c01a0010129a001a401012aa801aa01011daa01ac01011eac01ae010120ae01b0010122b001b2010124b801ba010127ba01bc010125bc01be010124be01c0010122c001c8010120d802e002012ce002e8020129e802f002012af002f802012af8020003012900030803012508031003012710031803012a180320030312142c20032803030f1129280330030311122c78037c03012a7c03800301278003840301298c039003012a900394030127940398030129a003a403012aa403a8030127a803ac03012a08001c000e050046006603320000040a002d0000006400140001320002010002ef022c01300102162a30013401021227340138010214293c01400102162a40014401021227440148010214294c01500102162a500154010214295401580102162a58015c010214295c01600102162a600164010214296401680102122768017001012470017801012578018001012798019c01012c9c01a0010129a001a401012aa801aa01011daa01ac01011eac01ae010120ae01b0010122b001b2010124b801ba010127ba01bc010125bc01be010124be01c0010122c001c80101200a020c02012c0c020e0201290e021002012a12021402012c14021602012916021802012a1a021c02012c1c021e0201291e022002012c26022802012c28022a0201292a022c02012a2e023002012c30023202012932023402012a36023802012c38023a0201293a023c02012a3e023f02012c3f024002012a41024202012c42024302012a4302440201294402450201294502460201294602470201294702480201294e025002012c50025202012952025402012a56025802012c58025a0201295a025c02012a5e026002012c60026202012962026402012a68026a02012c6a026c02012c6c026e0201296e027002012970027202012a72027402012a75027602012a76027702012a77027802012a78027902012a79027a02012a7a027b02012a7b027c02012a7c027d02012a7d027e02012a7e027f02012a7f028002012a80028102012a81028202012a82028302012a83028402012a84028502012a85028602012a86028702012a87028802012a88028902012a8b028c02012a8d028e02012a8f029002012a91029202012a93029402012a96029702012a99029a02012a9d029e020129a002a1020129a302a4020127a702a8020127a802a9020125ab02ac020125d802e002012ae002e8020127e802f0020129f8020003012700030803012418032003012a2003280301272803300301293c034003012a40034403012744034803012950035403012a54035803012758035c03012964036803012a68036c0301276c037003012ab203b403012ab403b603012a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003e014800490001134c004d000113e400e5000114e800e9000114ec00ed000108ee00ef000108f000f1000108f400f5000114f800f9000108fa00fb000108fe00ff0001080001010101080401050101140801090101140c010d0101070e010f0101071001110101071401150101141801190101141a011b0101071c011d0101072001210101072101220101072201230101072301240101072401250101072601270101076c016d0101056e016f0101057001710101057401750101067601770101067801790101067e017f010107b802b9020105c002c1020105c802c9020105d002d1020105d802d9020105e002e1020105e802e9020105f002f1020105f802f9020105000301030105080309030105100311030105180319030105200321030105280329030105300331030105380339030105600461040100680469040100`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tilemap`level1`)
    info.startCountdown(100)
    scene.cameraShake(4, 1000000)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (_2playing == 1) {
        Player2.setImage(img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 8 f . . . 
            . . . f f e e e e f 8 8 8 f . . 
            . . . f e e e f f 8 8 8 8 f . . 
            . . . f f f f 8 8 8 8 8 8 8 f . 
            . . . f 8 8 8 8 f f f f 8 8 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 a d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 8 8 8 f . . . 
            . . . . . e d d e 8 8 8 f . . . 
            . . . . . f e e f 8 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `)
        Left = 0
        Right = 1
    }
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    if (Start == 1) {
        scene.cameraFollowSprite(mySprite)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if ((mySprite.vy > 0 || (Player2.vy > 0 || (Player3.vy > 0 || Player4.vy > 0))) && (!(mySprite.isHittingTile(CollisionDirection.Bottom)) || (mySprite.y < bounce.top || (Player2.y < bounce.top || (Player3.y < bounce.top || Player4.y < bounce.top))))) {
        sprites.destroy(bounce, effects.fountain, 500)
        bounce.vx = 0
        statusbar.value += 100
        info.changeScoreBy(500)
        pause(1000)
    } else if (mySprite.y < bounce.left || (Player2.y < bounce.left || (Player3.y < bounce.left || Player4.y < bounce.left))) {
        info.changeScoreBy(-100)
        controller.player1.moveSprite(mySprite, 0, 0)
        mySprite.setVelocity(50, -60)
        statusbar.value += -50
        pause(2000)
        controller.player1.moveSprite(mySprite, 61, 0)
    } else if (mySprite.y < bounce.right || (Player2.y < bounce.right || (Player3.y < bounce.right || Player4.y < bounce.right))) {
        info.changeScoreBy(-100)
        controller.player1.moveSprite(mySprite, 0, 0)
        mySprite.setVelocity(-50, -60)
        statusbar.value += -50
        pause(2000)
        controller.player1.moveSprite(mySprite, 61, 0)
    } else if (mySprite.y < bounce.bottom || (Player2.y < bounce.bottom || (Player3.y < bounce.bottom || Player4.y < bounce.bottom))) {
        info.changeScoreBy(-200)
        controller.player1.moveSprite(mySprite, 0, 0)
        mySprite.setVelocity(randint(25, -25), 100)
        statusbar.value += -50
        pause(2000)
        controller.player1.moveSprite(mySprite, 61, 0)
    } else {
    	
    }
    sprites.destroy(bounce)
})
controller.player2.onEvent(ControllerEvent.Disconnected, function () {
    if (_2playing == 1) {
        Player2.startEffect(effects.fire, 500)
        Player2.startEffect(effects.fire, 500)
        Player2.startEffect(effects.fire, 500)
        Player2.startEffect(effects.fire, 500)
        Player2.startEffect(effects.fire, 500)
        sprites.destroy(Player2, effects.fire, 500)
    }
    Notification.notify("Player 2 disconnected...", 5, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 8 8 1 1 1 1 8 8 8 8 2 2 2 
        2 2 2 2 1 8 8 8 8 8 1 1 2 2 2 2 
        2 8 2 2 2 8 8 8 8 1 1 2 2 2 8 2 
        2 8 1 2 2 2 8 1 1 1 2 2 2 1 8 2 
        2 8 8 8 2 2 2 1 1 2 2 2 1 1 8 2 
        2 8 8 8 8 2 2 2 2 2 2 1 1 1 8 2 
        2 8 1 1 1 1 2 2 2 2 1 1 1 8 8 2 
        2 8 1 1 1 1 2 2 2 2 1 1 8 8 8 2 
        2 8 1 1 1 2 2 2 2 2 2 8 8 8 1 2 
        2 8 1 1 2 2 2 1 1 2 2 2 8 1 1 2 
        2 8 1 2 2 2 1 1 1 8 2 2 2 1 1 2 
        2 8 2 2 2 1 1 1 8 8 8 2 2 2 1 2 
        2 2 2 2 1 1 1 8 8 8 1 1 2 2 2 2 
        2 2 2 1 1 1 1 8 8 8 8 8 8 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (_4playing == 1 && Jump4 == 1) {
        Player4.setVelocity(1, -91)
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
        Jump4 = 0
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (_2playing == 1) {
        Player2.setImage(img`
            . . . . f f f f f f . . . . . . 
            . . . f 8 f e e e e f f . . . . 
            . . f 8 8 8 f e e e e f f . . . 
            . . f 8 8 8 8 f f e e e f . . . 
            . f 8 8 8 8 8 8 8 f f f f . . . 
            . f 8 8 f f f f 8 8 8 8 f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d a 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 8 8 8 e d d 4 . . . . . 
            . . . f 8 8 8 e d d e . . . . . 
            . . . f 5 5 8 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `)
        Left = 1
        Right = 0
    }
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (Start == 1) {
        mySprite.setImage(img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 4 d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `)
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Start == 1 && Jump1 == 1) {
        mySprite.setVelocity(1, -81)
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
        Jump1 = 0
    }
})
controller.player4.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (_4playing == 1) {
        Player4.setImage(img`
            . . . . f f f f f f . . . . . . 
            . . . f 7 f e e e e f f . . . . 
            . . f 7 7 7 f e e e e f f . . . 
            . . f 7 7 7 7 f f e e e f . . . 
            . f 7 7 7 7 7 7 7 f f f f . . . 
            . f 7 7 f f f f 7 7 7 7 f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d 8 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 7 7 7 e d d 4 . . . . . 
            . . . f 7 7 7 e d d e . . . . . 
            . . . f 2 2 7 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `)
        Right2 = 0
        Left2 = 1
    }
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (_3playing == 1 && Jump3 == 1) {
        Player3.setVelocity(-2, -72)
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
        Jump3 = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile13`)
    if (_2playing == 1) {
        tiles.placeOnRandomTile(Player2, assets.tile`myTile14`)
    }
    if (_3playing == 1) {
        tiles.placeOnRandomTile(Player3, assets.tile`myTile15`)
    }
    if (_4playing == 1) {
        tiles.placeOnRandomTile(Player4, assets.tile`myTile12`)
    }
    Death = randint(0, 10)
    if (Death == 0) {
        game.splash("Man I'm dead. ")
    } else if (Death == 1) {
        game.splash("LOL u suck! ")
    } else if (Death == 2) {
        game.splash("TECHNICAL DIFFICULTIES. ")
    } else if (Death == 3) {
        game.splash("Only a spoonful! ")
    } else if (Death == 4) {
        game.splash("The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. The void is coming. ")
    } else if (Death == 5) {
        game.splash("YOU SHUT UR STINKY MOUTH!!! 1!1")
    } else if (Death == 6) {
        game.splash("I will commit mass unaliving. ")
    } else if (Death == 7) {
        game.splash("At this point just stop playing... ")
    } else if (Death == 8) {
        game.splash("2 portals and 1 guy with curiosity. ")
    } else if (Death == 9) {
        game.splash("Remember Vine? Yeah you're just like it, dead. ")
    } else if (Death == 10) {
        game.splash("Are you actually playing this with friends? lol")
    }
    Owie += 1
    info.changeScoreBy(-250)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    _1connected = 1
    Notification.notify("Player 2 joined! ", 10, img`
        8 8 8 8 8 1 1 1 1 8 8 8 8 8 8 1 
        8 8 8 8 8 1 1 1 8 8 8 8 8 8 8 1 
        8 8 1 1 1 8 8 1 8 8 1 1 1 1 8 8 
        8 8 1 1 1 8 8 1 8 8 1 1 1 1 8 8 
        8 8 1 1 1 8 8 1 1 1 1 1 1 1 8 8 
        8 8 8 8 8 8 8 1 1 1 1 1 1 1 8 8 
        8 8 8 8 8 8 8 1 1 1 1 1 1 1 8 8 
        8 8 1 1 1 1 1 1 1 1 1 1 1 8 8 8 
        8 8 1 1 1 1 1 1 1 1 1 1 8 8 8 8 
        8 8 1 1 1 1 1 1 1 1 1 8 8 8 1 1 
        8 8 1 1 1 1 1 1 1 1 8 8 8 1 1 1 
        8 8 1 1 1 1 1 1 1 8 8 8 1 1 1 1 
        8 8 1 1 1 1 1 1 8 8 8 1 1 1 1 1 
        8 8 1 1 1 1 1 8 8 8 1 1 1 1 1 1 
        8 8 1 1 1 1 1 8 8 8 8 8 8 8 8 8 
        8 8 1 1 1 1 1 8 8 8 8 8 8 8 8 8 
        `)
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (Start == 1 && statusbar.value == 100) {
        mySprite.setVelocity(0, -59)
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
        statusbar.value = 0
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f e 2 f e f . . . f f . 
            . . f 2 e 2 e f e e f f f f f f 
            . f 2 2 e 2 f e 4 d d e 2 5 f f 
            . f f 2 e 2 f e 4 d d 4 2 5 f f 
            . f e f e 2 f e f 4 d 4 2 4 f . 
            . f e e f e f f b 1 d 4 2 4 f . 
            . f e e f e 2 f e 4 4 e e f f . 
            . f e e e f 2 f 4 d e d d e f f 
            . . f e e f 2 f 4 4 e d d e f f 
            . . f f e f e f e e e 4 e f f . 
            . . . f f f f f f e f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . f f f . . . f f . . . . . 
            . . f f f f f f f f f f . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f d d d d 4 e e e f . . . 
            . . f e d d 4 1 4 d 4 e e f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . f f f e e e f f f f f f f . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . . f e e e e f f e e e f . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . . f 2 f e e e e f f . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f e f f f f f f . . . 
            . f f e 4 e e e f e f e f f . . 
            f f e d d e 4 4 f 2 f e e f . . 
            f f e d d e d 4 f 2 f e e e f . 
            . f f e e 4 4 e f 2 e f e e f . 
            . f 4 2 4 d 1 b f f e f e e f . 
            . f 4 2 4 d 4 f e f 2 e f e f . 
            f f 5 2 4 d d 4 e f 2 e 2 f f . 
            f f 5 2 e d d 4 e f 2 e 2 2 f . 
            f f f f f f e e f e 2 e 2 f . . 
            . f f . . . f e f 2 e f f . . . 
            . . . . . . . f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 4 d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        250,
        false
        )
    } else if (Start == 1) {
        mySprite.sayText("On cooldown...", 500, true)
    }
})
controller.player4.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (_4playing == 1) {
        Player4.setImage(img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 7 f . . . 
            . . . f f e e e e f 7 7 7 f . . 
            . . . f e e e f f 7 7 7 7 f . . 
            . . . f f f f 7 7 7 7 7 7 7 f . 
            . . . f 7 7 7 7 f f f f 7 7 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 8 d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 7 7 7 f . . . 
            . . . . . e d d e 7 7 7 f . . . 
            . . . . . f e e f 7 2 2 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `)
        Right2 = 1
        Left2 = 0
    }
})
controller.player3.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (_3playing == 1) {
        Player3.setImage(img`
            . . . . f f f f f f . . . . . . 
            . . . f 5 f e e e e f f . . . . 
            . . f 5 5 5 f e e e e f f . . . 
            . . f 5 5 5 5 f f e e e f . . . 
            . f 5 5 5 5 5 5 5 f f f f . . . 
            . f 5 e f f f f 5 5 5 5 f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d 7 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 5 5 5 e d d 4 . . . . . 
            . . . f 5 5 5 e d d e . . . . . 
            . . . f 4 4 5 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    if (Jump1 == 1) {
        music.stopAllSounds()
        game.splash("passwords are used to pick up where you left off in the game, make sure to write it down somewhere safe!")
        saveFormat = pwsave.create()
        pwsave.splashPassword(saveFormat)
        game.setGameOverEffect(true, effects.starField)
        game.setGameOverMessage(true, "More coming soon!")
        game.gameOver(true)
    }
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (Start == 1) {
        mySprite.setImage(img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d 4 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `)
    }
})
let Time = 0
let Owie = 0
let Death = 0
let Jump3 = 0
let Jump1 = 0
let Jump4 = 0
let Time_over: Sprite = null
let Jump2 = 0
let Left2 = 0
let Right2 = 0
let Left = 0
let Right = 0
let bounce: Sprite = null
let saveFormat: pwsave.PasswordData = null
let statusbar4: StatusBarSprite = null
let _4playing = 0
let Pew = 0
let _3connected = 0
let Zombos = 0
let statusbar3: StatusBarSprite = null
let _3playing = 0
let _2connected = 0
let statusbar2: StatusBarSprite = null
let _2playing = 0
let Dash = 0
let _1connected = 0
let Double = 0
let statusbar: StatusBarSprite = null
let Start = 0
let Zombo: Sprite = null
let Player4: Sprite = null
let Player3: Sprite = null
let mySprite2: Sprite = null
let Player2: Sprite = null
let mySprite: Sprite = null
let Hm = 0
if (Achievements.checkForAchievement("Play v0.2!", true)) {
    Achievements.showAchievement(
    "Play v0.2!"
    )
    game.showLongText("V0.2 released! What's new?", DialogLayout.Full)
    game.showLongText("Players 2 and 4 can now do it both left and right instead of only right, tutorial level added, added killable spikes and winnable flags. And some quality of life improvements to player 2 dash. New timer added, it looks like the score but it isn't, its a timer, I will most likely change this but you have 100 seconds (1 minute and 40 seconds) to beat the level, that includes the tutorial... ", DialogLayout.Full)
    Hm = randint(1, 20)
    if (Hm == 10) {
        pause(5000)
        game.showLongText("...", DialogLayout.Full)
        game.showLongText("Hm? ", DialogLayout.Full)
        game.showLongText("Oh! ", DialogLayout.Full)
        game.showLongText("You are still here? ", DialogLayout.Full)
        game.showLongText("What are you doing? Don't you wanna play the game my c- he made? ", DialogLayout.Full)
        game.showLongText("What was that? ", DialogLayout.Full)
        game.showLongText("You're saying you don't why you are still here? ", DialogLayout.Full)
        game.showLongText("Well, the program doesn't just not send players to the game. ", DialogLayout.Full)
        game.showLongText("there must be a reason why you're here...  Maybe...  ", DialogLayout.Full)
        game.showLongText("Wait... Is. Is it true? Are you? ", DialogLayout.Full)
        game.showLongText("OH THANK GOD SOMEONE FINALLY CAME! PLEASE YOU MUST HELP ME! ", DialogLayout.Full)
        game.showLongText("PLEASE YOU GOTTA GET ME OUT OF HERE! I CANT STAND BEING IN THE VOID ANYMORE, I WAS A PLAYER LIKE YOU. I was playing a game about a monkey stealing a fish's spaghetti or something like that, anyway that doesn't matter, someone. Or someTHING has like, I don't know... trapped me here? I know it doesn't sound believable but please get me out of here! I think you can get me out by b-", DialogLayout.Full)
        music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 120), music.PlaybackMode.InBackground)
        Achievements.showAchievement(
        "CONNECTION OVERRIDE.",
        "YOU ARE IN A RESTRICTED AREA."
        )
    }
    game.splash("CONNECTION BROKEN.")
}
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
scroller.setCameraScrollingMultipliers(0.1, 0.06)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Player2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Player3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Player4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Zombo = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(0, 0)
mySprite2.setPosition(160, 120)
Player2.setPosition(0, 0)
Player3.setPosition(0, 0)
Player4.setPosition(0, 0)
mp.setPlayerIndicatorsVisible(true)
let myMenu = miniMenu.createMenu(
miniMenu.createMenuItem("(A) START", img`
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 7 
    . . . . . . . . . . . 7 7 7 7 7 
    . . . . . . . . . . . 7 7 7 7 7 
    . . . . . . . . . . 7 7 7 7 7 . 
    . . . . . . . . . 7 7 7 7 7 . . 
    . . . . . . . . . 7 7 7 7 . . . 
    7 7 7 . . . . . 7 7 7 7 7 . . . 
    7 7 7 . . . . . 7 7 7 7 . . . . 
    7 7 7 7 . . . 7 7 7 7 7 . . . . 
    7 7 7 7 7 . . 7 7 7 7 . . . . . 
    7 7 7 7 7 . 7 7 7 7 . . . . . . 
    . 7 7 7 7 7 7 7 7 7 . . . . . . 
    . . 7 7 7 7 7 7 7 . . . . . . . 
    . . 7 7 7 7 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 . . . . . . . . 
    `),
miniMenu.createMenuItem("(B) Reset achievements")
)
myMenu.setButtonEventsEnabled(true)
myMenu.setFrame(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `)
myMenu.setTitle("GET EVERYONE CONNECTED NOW TO PLAY TOGETHER!")
myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
    if (Achievements.checkForAchievement("Thanks for trying my game!", true)) {
        game.showLongText("Use the D-PAD or Joystick to move, press (A) to jump and (B) to enable a power up, each player has a different power up! Press the down arrow to make the camera follow your current character. ", DialogLayout.Full)
    }
    Start += 1
    myMenu.close()
    mySprite = sprites.create(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 4 d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Player)
    statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
    statusbar.setColor(2, 15)
    statusbar.attachToSprite(mySprite, 0, 0)
    statusbar.max = 100
    mySprite.setStayInScreen(true)
    mySprite.setPosition(20, 80)
    Double = 1
    scene.cameraFollowSprite(mySprite)
    controller.player1.moveSprite(mySprite, 61, 0)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    if (_1connected == 1) {
        Dash = 1
        _2playing = 1
        Player2 = sprites.create(img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 8 f . . . 
            . . . f f e e e e f 8 8 8 f . . 
            . . . f e e e f f 8 8 8 8 f . . 
            . . . f f f f 8 8 8 8 8 8 8 f . 
            . . . f 8 8 8 8 f f f f 8 8 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 a d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 8 8 8 f . . . 
            . . . . . e d d e 8 8 8 f . . . 
            . . . . . f e e f 8 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `, SpriteKind.Player)
        statusbar2 = statusbars.create(20, 4, StatusBarKind.Energy)
        statusbar2.attachToSprite(Player2)
        statusbar2.setColor(8, 15)
        statusbar2.max = 100
        Player2.setStayInScreen(true)
        Player2.setPosition(50, 60)
        controller.player2.moveSprite(Player2, 79, 0)
    }
    if (_2connected == 1) {
        _3playing = 1
        Player3 = sprites.create(img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 5 f . . . 
            . . . f f e e e e f 5 5 5 f . . 
            . . . f e e e f f 5 5 5 5 f . . 
            . . . f f f f 5 5 5 5 5 5 5 f . 
            . . . f 5 5 5 5 f f f f e 5 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 7 d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 5 5 5 f . . . 
            . . . . . e d d e 5 5 5 f . . . 
            . . . . . f e e f 5 4 4 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `, SpriteKind.Player)
        statusbar3 = statusbars.create(20, 4, StatusBarKind.Energy)
        statusbar3.attachToSprite(Player3)
        statusbar3.max = 100
        statusbar3.setColor(5, 15)
        Zombos = 1
        controller.player3.moveSprite(Player3, 69, 0)
        Player3.setStayInScreen(true)
        Player3.setPosition(80, 40)
    }
    if (_3connected == 1) {
        Pew = 1
        _4playing = 1
        Player4 = sprites.create(img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 7 f . . . 
            . . . f f e e e e f 7 7 7 f . . 
            . . . f e e e f f 7 7 7 7 f . . 
            . . . f f f f 7 7 7 7 7 7 7 f . 
            . . . f 7 7 7 7 f f f f 7 7 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 8 d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 7 7 7 f . . . 
            . . . . . e d d e 7 7 7 f . . . 
            . . . . . f e e f 7 2 2 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `, SpriteKind.Player)
        statusbar4 = statusbars.create(20, 4, StatusBarKind.Energy)
        statusbar4.setColor(7, 15)
        statusbar4.value = 100
        statusbar4.attachToSprite(Player4)
        Player4.setStayInScreen(true)
        Player4.setPosition(110, 20)
        controller.player4.moveSprite(Player4, 51, 0)
        if (Achievements.checkForAchievement("Always better with friends! ", true)) {
            Achievements.showAchievement(
            "Always better with friends! ",
            " ",
            1,
            img`
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                2 2 1 1 2 2 1 1 8 8 1 1 1 8 8 1 
                2 1 2 1 1 2 1 1 8 1 8 1 8 1 1 8 
                2 2 2 1 1 2 1 1 8 8 8 1 1 1 1 8 
                2 1 1 1 1 2 1 1 8 1 1 1 1 1 8 1 
                2 1 1 1 1 2 1 1 8 1 1 1 1 8 1 1 
                2 1 1 1 2 2 2 1 8 1 1 1 8 8 8 8 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                5 5 1 1 1 5 5 1 1 7 7 1 1 7 1 7 
                5 1 5 1 5 1 1 5 1 7 1 7 1 7 1 7 
                5 5 5 1 1 1 1 5 1 7 7 7 1 7 7 7 
                5 1 1 1 1 1 5 1 1 7 1 1 1 1 1 7 
                5 1 1 1 5 1 1 5 1 7 1 1 1 1 1 7 
                5 1 1 1 1 5 5 1 1 7 1 1 1 1 1 7 
                `
            )
        }
    }
    saveFormat = pwsave.create()
    if (game.ask("load password?")) {
        if (pwsave.promptForPassword(saveFormat)) {
            scene.setBackgroundImage(img`
                fffffffcbccffffffffffcfbddddddddddd111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbffcddffffffcfcfffff
                fffffffccffffcffffffbfddddddddd11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccdbffffffffffffff
                fffffffcffffffbffffffddddddddd1111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffcbfffffffffffcdcf
                ffffffcffffffffbdffffddddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffdfbfffffff
                fcfffffffcdcdffdffdccdddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbffffffdffffffff
                fffffffffdbddcfffffcddddd1111111111111111111111111111111111111111111dddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfcfffffcfffbfff
                fcffffbffbffffffffbbddddd111111111111111111111111111111111111111111d11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdcfffffffffbffff
                fcbffffffcfffffffcdddd1111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffffffffff
                fdcccffffdbffcffccdddd111111111111111111cc1111111111111111111111111d111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffff
                fffffffffffffffcdddd1111111111111111111cccc111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfcfffffffffffff
                ffffffffffffffcbddd11111111111111111111cccc11111111111111111111111111111dddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffffff
                fffffffddcfffdddddd11111111111111111111ccccc11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffff
                fffffffdddbffbddd111111111111111111111cccccc111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffcffffffffff
                ffffffcbfcccddddd111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfffffffffffff
                fffffffffcfddddd1111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffff
                ffffffffdfcdddd1111111d11111d111111111cccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfbfffcfffffff
                ffffffffcfbddd11111111111111111111111ccccccccc1111111111111111111111111111111111d1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfffdffffffff
                fffffffcdcdddd11111111111111111111111cccccccccc1111111ccc111111111ccc111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffff
                fffffbfffcddd11111111111111111111111ccccccccccc1111111cccc111c1111ccc11111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
                fccffdcbfbddd11111111111111111111111cccccccccccc111111cccc11ccc111ccc1111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
                fffcffcdfbdd11111111111111111111111ccccccccccccccc1111cc1c11ccc11cccc111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
                ffddfffbbbdd1111111111111111111111cccccccccccccccc1111cc1c11ccc11c11c111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfccfffffffff
                cfdffffbcdd11111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfcdfffffffff
                ffffffccdd111111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfbfffffffff
                ffcfffbdb111111111111111111111111111cccccccccccc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddcfdbffffffff
                fffffcddddd1111111111111111111111111cc1cc1ccd1cc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbfcfffffffff
                fffffbdddd11111111111111111111111111cc1cc1ccc1cc1111111ccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddcfcfffffffff
                ffffcbddddd1111111111111111111111111cccccccccccc11111111ccccccccccc11111111111111111d1ddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbcfffffffffff
                fffccddddd11111111111111111111111111cccccccccccc111111111cccccccccc11111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddbbffffffffffff
                ffdcbddddd11111111111111111111111111cccccccccccc111111111ccccccccc111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbffffffffffcf
                ffccddddddd11111111111111111111111111cccccccccc1111111111ccccccccc1111111111111111111dddddddddddddddddddddddddddddddddddddddddddddbddddddbbdddddddbcffffffffffff
                ffcbdddddd1111111111111111111111111111cccccccc11b11111111ccccccccc111111111111bb1111ddddddddddddddddddddddddddddddddddddddddddbbddbbdddddbbdddddddbccfffffffffff
                ffcbddddd111111111111111111111111111111cccccccbccccccc111ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbddbddddddbddddddddfffffffffffff
                fcbbdddddd1111111111cccb1ccc1111cccc111ccccccccccccccccc1ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbbdbbdddddbdbddddbbbcfffffffffff
                fcddddddd1111111111ccccb1cccc11ccccc111cccccccccbbccbbbccccccccccc1111111111111b111ddddddddddddddddddddddddddbdddddddddddddddddddbddbbddddbbbddbbbcfffffffffffff
                ccddddddd1111111111cccccbcccc11ccccc111cccccccccbbcccbbccccccccccc111111111111111111dddddddddddddddddddddddddbbdddddddddddddddddddbddbddddbbddbbbbffffffffffffff
                ddddddddd1111111111ccc1ccccccccc1ccc111ccccccccccccccccccccccccccc1111111111111b111bdddddddddddddddddddddddddbbdddddddddddddddddddbbbbddddbddbbbbccfffffffffffff
                dddddddd11111111111cc11ccc11cccc1ccc111ccccccccc1111cccccccccccccc1111111111111b111bddd1dddddddddddddddddddddbdddbdddddddddddddddddbbbddddbbbbbbbccfffffffffffff
                dddddddd11111111111cccccccbcccccccccc11cccccccc1111111cccccccccccc1111111111111b111bddd1dddddddddddddddddddddbddbbdddddddddddddddddbbbdddbbbbbbbbccfffffffffffff
                dddddddd11111111111ccccccccccccccccc111ccccccc1111b1111ccccccccccc1111111111111b1dbb1ddddddddddddddbbbbddddddbddbdddddddddddddddddddbbdddbbbbbbbccffffffffffffff
                dddddddddd111111111cccccccccccccccc1bb1ccccccc1111bb111ccccccccccc11111b1111111b1dbbdddddddddddddddbddbbbddddbdbddddddddddddddddddddbbddbbbbbbbbcbffffffffffffff
                dddddddddd1111111111cccccccccccccccccccccccccc111111111cccccccccccbb11111111111b1db1dddddddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbbbbbbbccfffffffffffffff
                dddddddddd11111111111cccccccccccccbccbbccccccc1111111b1cccccccccccbbbb111111111b1db1ddd1ddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbbbbbbcbbcffffffffffffff
                ddddddddd1d11111111111ccccccccccccbbcbbccccccc1111111b1cccccccccccc1b1111111111bbbddddd1dddddddddbbdddddbbdbbddddddddddddbdddddddddbbbbbbbbbbccbcfffffffffffffff
                ddddddddd1d11b11111111ccccccccccccbccbcccccccc111111bb1cccccccccccc111111111111bbbdddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbbbbbbbcffffffffffffffff
                ddddddddd1d11b11111111cccccccccccccccccccccccc1111111bbcccccccccccc11111111111bbbdddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbccfffffffffffffffff
                dddddddddddddbbd1bb111cccccccccccc111d1cccccccd1d1111bbcccccccccccc11111111111bbb1ddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbbccffffffffffffffff
                dddddddddddddbbd1b1111ccccccccccccddbccccccccccc1ddddbccccccccccccc11111111bb1bb11dddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
                ddddddddddddddbd1b11bbccccccccccccccccccccccccccbcccccccccccccccccb1d111111bbbbbdddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
                ddddddddddddddbb1b11bbccccccccccccccccccccccccccccccccccccccccccccd1111b1111bbb11ddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbbbbbcffffffffffffffffff
                dddddddddddddddb1b1db1ccccccccccccccccccccccccccccccccccccccccccccc1111d1111bbb11dddddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbbbbbbcfffffffffffffffff
                ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1111d1111bbbddddddddbddddddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbbbbbcffffffffffffffffff
                ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1b11d1111bbbddddddddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbbbbbcfcffffffffffffffcff
                ddddddddddddddddbb1b11cccccccccccccccccccccccccccccccccccccccccccccbbb111111bbbddddddddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbccfffffffffffffffffff
                ddddddddddddddddbddbd1ccccccccccccccccccccccccccccccccccccccccccccbbb111d111bbbb1dddddddbbbdddddddbbddddbbbbbddddddddbdbbbbbbbbbbbbbbbbbbbbcfcffffffffffffffffff
                ddddddddddddddddbbb111cccccccccccccccccccccccccccccccccccccccccccc1bb1111111bbbbddddddddbbbdddddddbdddddbbbbbddddbdddbdbbbbbbbbbbbbbbbbbbbbffffffffffffffffffcff
                ddddddddddddddddbbd111ccccccccccccccccccccccccccccccccccccccccccccd1bbb11111bbbbdddddddddbbddddddbbdddddbbbbbdddbbdddbbbbbbbbdbbbbbbbbbbbbcfffffffffffffffffffff
                ddddddddddddddddbbdd1dcccccccccccccccccccccccccccccccccccccccccccc111bb11111bbbbdddd1ddddbbddddddbbdddddbbbbbdddbbddddddbdddddddddbbbbbbbbcfffffffcfffffffffffff
                dddddddbbdddddbbbbddddcccccccccccccccccccccccccccccccccccccccccccc111bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbddddbdbdddddddddddddddddddddddfffffffffffffffffffff
                dbddddddddbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccbcccccb11bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbbdddddddddddddddbddddddddddbbcfffffffffffffffffffff
                ddbddbddbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbccccccccccccccd11b11111bbbbbbddddddddbbbdddddbbddddbbbbbbdddddddddddddddddddddddddddbcffffffffffffffffffffff
                dbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccc111bb111bbbbbbbbdddddddbbbbddddbbdddbbbbbbddddddddddddddddddddddddddbbbcdfffffffffffffffffffff
                bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbb1bb1bbbbbbbbbbbbdddddbbbbddddbbddbbbbddbbdddddddddddddddddddbddddbccfddfffffffffffffffffffff
                dbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbdddddddddddddbcffffffffffffffffffffffffff
                bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbddddbdddddddddddddddddddddddddddccffffffffffffffffffffffffff
                bbbbbbbbddbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbddddddddddbddddddddddddddddddddddbdddddbbbffbdfffffffffffffffffffffff
                bbbbbbbdddddbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbddddbddddddddbdddddddddddddddddddddddddddbddfcbfdffffffffffffffffffffff
                bbbbddddddddddddddbbbbcccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddbdffdffbcfffffffffffffffffffff
                bbbddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbdbbdbdddddddbddddbddddddddddddddddddddddddddddddddddddddcffcdfffffffffffffffffcfffffff
                bbdddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbcccbbbbbddbdddddddddddddddddddddddddddddddddddddddddddddddddbcdffdfcdfffffffffffffffffffffff
                bddddddddddddddbdbbbbccccccccccccccccccccccccccccccccccccccccccbcbbbcbddddddddddddbddddddddddddddddddddddddddddddddddbddddddddddbfcffffcffffffffffffffffffffffff
                ddddddddddddddddbdbbbcccccccccccccccccccccccccccccccccccccccccbbcddddcdbddddbbddddbbdddddddddddbdddddddddddddddddddbddddddddddddcbdffffffffffbfffffcffffffffcbff
                dbdbddddddddbdbdbbbbccccccccccccccccccccccccccccccccccbcccbcbbdbcddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddcffffffffffffffffffffffffcfffddf
                ddddddbddddddddbbbbbcccccccccccccccccccccccccccccccbbcbccbbbbdbdddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddbffffffffffffffffffffffffcdfffcff
                ddddddddddddbdbbbbbbccccccccccccccccccccccccccccccbbbbbbdddddddbddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffdffff
                dddddddddddddbbbbbbcccccccccccccccccccccccccccccbbbcddddbdbcdddcddddddddddddddddbdddbddddddddddbdddddddddddddddddddddddddddddddccfffffffffffffffffffffffffffffff
                ddddddddddddbbbbbbbcccccccccccccccccccccccccccbbddddddddbdbddddbdddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddcfcffffffffffffffffcffffffffffffff
                bdbddddddbddbbbbbbccccccccccccccccccccccccccbddddbbdddddddddddddddddddbddddddddddddddddddddddddddddbdbdddddddddddddddddddddddbffffffffcffffffffffffffffcfcffffff
                dbddbdddddddbbbbcccccccccccccccccccccccccccdbdbdddddddddddddddddddddddbddddddddbdcbddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffcffffff
                dddddddddddddddddbcbcccccccccccccccccccccbddcbbcdddbddddddddddddcdbddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddfffbffffffffffffffffffffffffffcffff
                ddddddddddddcddddddbbccccccccccccccccbcbcbddddddbdbcddddddddddddddddddddddddddcbddddddddddddbdddddddddddddddddddddddddddddddcfffdfffffffffffffffffffffffffffffff
                dddddddddddbcdddddbddcbbcccccccbcccbbbbbccddbddddbdbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddbffffcfffffffffffffffffffffffffffffff
                bdddddddddcdddddddddbcbbbcbbbcbbbdddbddddbddddddddddddddddbddddddddddddddddbcdddcddddddddddddddddddddddddddccddddddddddddddbddfffffffffffcffffffffffffffffcccfff
                ddddddddddddbddddbdddbbdbcbddbdbddddddddddbdddddddbdddddcddddddddddddbddddddddddddddddbddddddddbdddddddddddddddddddddddddddcdfffffffffffffffffffffffffffffccfffc
                dddcdddddddddddddddddcdddddddbdbbbdddbddddddddddddccdddddbddddddddcddddddddcddddddddddddddddddddddddddddddddddddddddcddddddcffffffffffffffffffffffffffffffffffff
                dddbdddddddddddddddddcdddddddcbddddbbddddddcdbddbdddddddddddbcbbbdcbddddddcbddddddddddddddddddddddddddddbddddddddddddddddddcfffffffffffffffcffffffffffffffffffff
                bdddddddddddddddddddddddddddbddbdbcbdbbddddbdddddddddddddbbbbbbcbbbbcdbbddddbddbcddddddddddddddddbdddddddddddddddddddddddddcffffbdcffffffffcffffffffffcfffffffff
                dddddddddddddddddddddddddddbbdddddbcdddddddbddddcdbbdbbbbcccbbccccbcbcbbbbbbbbccbcbbbdbbbbddddddddddddddddddddddddddbbbbdddcffffcfbfffffffffffffffffffffffffffff
                dddddddddddddddddddbdddddcbbddddddbbdddddddbbddddbbbbbccccccccccccccccccccccccccccbccbcbbccbdbbdddddddddddddddddddbbbbbbddbccfddfffffffffffbbfffffffffffffffffff
                bbbdddddddbddddddddddddbddcddbdddddbbddbccbcccbbcbbbcbccccccccccccccccccccccccccbcccccccccccccbbbdddddddddddddbbbbccccbbddccfffffcffffffffffffffffffffffffffffff
                cccbddddddddddddddddddddddbdddddbbbcbcccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbccccbdbdddbdbbbcccbccbbbdddbfffffdfffffffffffffffffffffffffffffff
                ccccddbdddddddddddcddddccbbbccbbcbbccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbdddddfffffffffffffffcfffffffffffffffffffff
                ccbbbbbddddddddddbcdddcccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccbbddddddbfffffffffffffffffffffffffffffffffffff
                ccccccbcbbbdddddbcccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddddddddbfffffffffffffffffffffffffffffffffffff
                cccccccbccbbbcbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbdddddddddbcffffffffffffffffcbfffffffffffffffffff
                cccccccccccbcbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccbbdddddbdddbcfffffffffffffffffffffffffffffffffffff
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbbcccccccccccccbbbbddddddddddbcffcffffffffffffffffffffffffffffffffff
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbbcccccbbcccccccbbbbdddddddddddbccffffffffffffffffffffffffffffffffffff
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbddddddbbcbbbdbccccbbdddddbdddddddddcffdffdffffffffffffffffffffffffffffffff
                cccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccbcccbbbbbbddddddddddddddbbbbbbdddddcdddddddddddbcfffffffffffffffffffffffffffffffffffffc
                cccccccccccccccccccccccccccccbbddcbccccbccccccccccccccccccccccccccccccbdbbbbddddbdddddbddddddddddddddddddddddccdddddddddcfffffffffffffffffffffffffffffffffffffff
                cccccccccccccccccccccccccccbbbcddbbcbbbbbccbbcccccccccccccccccccccbbbddddbbdddddbdccddbdddddddddddddddddddddddddddddddbcffffffffffffffffffffcfffffffffffffffffff
                ccccccccccccccccccccccccccbddddddbbbbddbbbbdbccccccccccccccccccbcddddddddddbddcbdccbddddddddddddddddddddddddddddddddcbfdffffffffffffffffffffffffffffffffffffffff
                cccccccccccccccbccccccccbcdddddddddbddddddbbbddbbbbccccccccccccdbdddddddddddbddddddddddddddddddddddddddddddddddddddcfcfffffffffffffffffcbffffffffffffffcffffffff
                cccccccccccccccccccccfccccbddddddddddddddbcbcdddddbbbcccccbbbcdddddddbdddddddddddddddddddddddddddddddddddddddddddcdffbffffffffffffffffffbffffffffffffcbcffffffff
                ccccccccccccccccccfccffffccbdddddddddddddddbdbddddddcdbcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffdffcfffffbfffffffffdccfffffffffffffffffffff
                cccccccccccccccffcffcccffffccdddddddddddddcccdddddbdbddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffddfffffffffffffffddffffffffffffffffffffff
                cccccccfccffffcffffffcdfffffcfddddddddddddbccbddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffffffffdfffffffffcffffffffffffffbffffffffffffff
                ccfcccfffffffffffffffffffffcfccddddddddddbdcdddddddddddddddddddddddddddddddddddddddddddddbccbbccbcbbbdbbbdbfffdffffffffffffffffcfffffffffffffddfffffffffffffffff
                cffcccffffffffffffffffffffffbcfcdddddddddccbdbdddddddddddddddddddddddddddddddddddddddbddfccccbfcfffffcbcfffcffcffffffffffccfffcffffffffffffffdbfffffffffffffffff
                fcfffffffffffffffffffffffffffffbcbbdddddbcbcdbbbcbdbddddddddddddddddddddddddddddddbbccffffffffffffffffcbfffffffffffdffffcfffffffffffffffffffccffffffffffffffffff
                fffffffffffffffffffffffffffffffcfffcdcfffcbcfcbccfccbddddddddddddddddddddddddddddbbbcfffffffffffffffffffcdbffffffffffffcdfdfffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffcffffffdffdfcffffccddddddddddddddddddddddddbdccfffffffffffffffffffffcffffcffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffdfffffbfbfffffbcfbffffffcccbcbcbdddddddddddddccccffffffffffffffffffffffffffffffffffffffffffcfffffffccfffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffccffffffffffffffdfdcfffffddffcffccccffbdbbbdddcfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffff
                fffffffffffffffffffcffffffffffffffffffffffffffffffffddfcfbfffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffcfffffdcfffddffffffffffffffffbffffcbffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfffff
                ffffffffffffffffffffffdfffffffffcfffffffbffffffffffdffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbffffdfffcddcfffffffffffffffff
                fffffffffffffffffffffffffffffffffbffffffbffffffffffffffffffffffbfcffffcfffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffffffffccffffff
                `)
        }
    }
})
myMenu.onButtonPressed(controller.B, function (selection, selectedIndex) {
    if (game.ask("are you sure?")) {
        Achievements.resetAllAchievements()
        game.reset()
    }
})
game.showLongText("Use the D-PAD or Joystick to move, press (A) to jump and (B) to enable a power up, each player has a different power up!", DialogLayout.Full)
tiles.setCurrentTilemap(tilemap`level0`)
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
    7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
    7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
    6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
    6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
    6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
    6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
    6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
    66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
    66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
    66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
    66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
    66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
    6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
    6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
    6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
    bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
    bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
    bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
    bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
    bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
    bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
    bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
    bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
    bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
    bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
    b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
    b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
    b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
    b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
    dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
    9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
    9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
    9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
    9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
    99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
    99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
    9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
    9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
    999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
    d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
    dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
    dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
    dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
    d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
    9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
    d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
    ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
    dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
    ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
    dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
    ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
    dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
    ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
game.onUpdate(function () {
    if (mySprite2.overlapsWith(Player2)) {
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
        scene.cameraShake(8, 500)
        Player2.setVelocity(randint(0, 100), randint(0, -100))
    }
})
game.onUpdate(function () {
    if (mySprite2.overlapsWith(mySprite)) {
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
        scene.cameraShake(8, 500)
        mySprite.setVelocity(randint(0, 100), randint(0, -100))
    }
})
game.onUpdate(function () {
    if (mySprite2.overlapsWith(Player3)) {
        Player3.setVelocity(randint(0, 100), randint(0, -100))
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
        scene.cameraShake(8, 500)
    }
})
game.onUpdate(function () {
    if (mySprite2.overlapsWith(Zombo)) {
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
        sprites.destroy(Zombo, effects.disintegrate, 500)
    }
})
game.onUpdateInterval(2000, function () {
    bounce = sprites.create(img`
        . . . . . . . . . . b 7 b . . . 
        . . . . . . . . . b 7 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 7 7 7 7 7 b . . . 
        . . . . b b 7 f f f f 7 7 f . . 
        . . . . b 7 7 f f 2 f 7 4 c . . 
        . . . . b 7 7 f f f f 7 4 4 . . 
        b 7 7 7 b b d 7 7 7 4 e e e 4 b 
        b b 7 7 7 7 b 7 7 4 4 4 4 4 b . 
        b 7 c 7 7 7 7 d 7 7 7 7 7 b . . 
        c 7 7 c d 7 7 b 7 7 7 7 7 7 b . 
        c b 7 7 c c b 7 7 7 7 7 7 7 b . 
        . c 7 7 7 7 7 7 7 7 7 7 7 d b . 
        . . c b 7 7 7 7 7 7 7 7 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(bounce, assets.tile`myTile28`)
    bounce.ay = 50
    bounce.setBounceOnWall(true)
    bounce.setVelocity(randint(-75, 75), 0)
    bounce.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(1000, function () {
    if (Start == 1) {
        Time += -1
    }
})
forever(function () {
    if (Start == 1) {
        mySprite.ay = 100
    }
})
forever(function () {
    if (_4playing == 1) {
        Player4.ay = 100
    }
})
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        Jump1 = 1
    }
    if (Player2.isHittingTile(CollisionDirection.Bottom)) {
        Jump2 = 1
    }
    if (Player3.isHittingTile(CollisionDirection.Bottom)) {
        Jump3 = 1
    }
    if (Player4.isHittingTile(CollisionDirection.Bottom)) {
        Jump4 = 1
    }
})
forever(function () {
    if (_2playing == 1) {
        Player2.ay = 100
    }
})
forever(function () {
    if (_3playing == 1) {
        Player3.ay = 100
    }
})
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        controller.player1.moveSprite(mySprite, 60, 0)
    }
})
game.onUpdateInterval(100, function () {
    if (Start == 1) {
        statusbar.value += 4
    }
    if (_2playing == 1) {
        statusbar2.value += 3
    }
    if (_3playing == 1) {
        statusbar3.value += 2
    }
    if (_4playing == 1) {
        statusbar4.value += 5
    }
})
