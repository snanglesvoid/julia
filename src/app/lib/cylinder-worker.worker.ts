// /// <reference lib="webworker" />

// // import {
// //   LineBasicMaterial,
// //   MeshPhongMaterial,
// //   DoubleSide,
// //   RepeatWrapping,
// //   TextureLoader,
// //   MeshLambertMaterial,
// //   CircleBufferGeometry,
// //   RingBufferGeometry,
// //   ConeBufferGeometry,
// //   CylinderBufferGeometry,
// //   BufferGeometry,
// //   Group,
// //   Mesh,
// // } from 'three'

// // import { ExtrudedCylinderBufferGeometry } from './ExtrudedCylinderGeometry'
// // import { gearGeometry } from './gear'

// addEventListener('message', ({ data }) => {
//   const response = `worker response to ${data}`
//   postMessage(response)
// })

// function initialiseMaterials() {
//   lineMaterial = new LineBasicMaterial({
//     color: 0xffffff,
//     transparent: true,
//     opacity: 0.5,
//   })

//   bronze = new MeshPhongMaterial({
//     color: 0xcd7f32,
//     emissive: 0x673811,
//     side: DoubleSide,
//     flatShading: false,
//     shininess: 100,
//     reflectivity: 0.5,
//   })
//   iron = new MeshPhongMaterial({
//     color: 0x555555,
//     emissive: 0x333333,
//     side: DoubleSide,
//     flatShading: false,
//     shininess: 50,
//     reflectivity: 0.5,
//   })
//   gold = new MeshPhongMaterial({
//     color: 0xffd700,
//     emissive: 0x885300,
//     side: DoubleSide,
//     flatShading: false,
//     shininess: 100,
//     reflectivity: 0.5,
//   })
//   copper = new MeshPhongMaterial({
//     color: 0xb87333,
//     emissive: 0x643118,
//     side: DoubleSide,
//     flatShading: false,
//     shininess: 100,
//     reflectivity: 0.5,
//   })
//   const texture = new TextureLoader().load('./assets/BirkKompostionAbstand.png')
//   texture.wrapS = RepeatWrapping
//   texture.wrapT = RepeatWrapping
//   // texture.repeat.set(400, 400)
//   textureMaterial = new MeshLambertMaterial({
//     transparent: false,
//     map: texture,
//     side: DoubleSide,
//   })
//   const bronzeTexture = new TextureLoader().load('./assets/copper3.jpg')
//   bronzeTexture.wrapS = RepeatWrapping
//   bronzeTexture.wrapT = RepeatWrapping
//   bronzeTexture.repeat.set(4, 4)
//   bronzeTextureMaterial = new MeshPhongMaterial({
//     transparent: false,
//     map: bronzeTexture,
//     shininess: 100,
//     reflectivity: 0.5,
//     side: DoubleSide,
//   })

//   const goldTexture = new TextureLoader().load('./assets/gold.jpg')
//   goldTexture.wrapS = RepeatWrapping
//   goldTexture.wrapT = RepeatWrapping
//   goldTexture.repeat.set(1, 1)
//   goldTextureMaterial = new MeshPhongMaterial({
//     transparent: false,
//     map: goldTexture,
//     shininess: 80,
//     reflectivity: 0.3,
//     side: DoubleSide,
//   })

//   const ironTexture = new TextureLoader().load('./assets/iron.jpg')
//   ironTexture.wrapS = RepeatWrapping
//   ironTexture.wrapT = RepeatWrapping
//   ironTexture.repeat.set(1, 1)
//   ironTextureMaterial = new MeshPhongMaterial({
//     transparent: false,
//     map: ironTexture,
//     shininess: 60,
//     reflectivity: 0.3,
//     side: DoubleSide,
//   })
// }

// function updateGeometries(group: Group) {
//   group.children.forEach(x => {
//     ;(x as Mesh).geometry.dispose()
//     group.remove(x)
//   })

//   let geometry = new ExtrudedCylinderBufferGeometry(
//     parameters.cylinderRadius, //data.radiusTop,
//     parameters.cylinderRadius, //data.radiusBottom,
//     parameters.cylinderHeight, //data.height,
//     parameters.radialSegments, //data.radialSegments,
//     parameters.heightSegments, //data.heightSegments,
//     parameters.cylinderOpenEnded, //data.openEnded,
//     0, //data.thetaStart,
//     2 * Math.PI, //data.thetaLength,
//     parameters.cylinderExtrusion,
//     extrusionFunction
//   )
//   geometry.translate(0.0, parameters.cylinderHeight / 2, 0.0)
//   geometry.computeVertexNormals()

//   let bottomDiskGeometry = new CircleBufferGeometry(
//     parameters.cylinderRadius, //radius
//     parameters.radialSegments //segments
//   )
//   bottomDiskGeometry.rotateX(Math.PI / 2)
//   bottomDiskGeometry.translate(0, 0, 0)

//   let topDiskGeometry = new RingBufferGeometry(
//     parameters.topConeRadius,
//     parameters.cylinderRadius,
//     parameters.radialSegments,
//     1
//   )
//   topDiskGeometry.rotateX(Math.PI / 2)
//   topDiskGeometry.translate(0, parameters.cylinderHeight, 0)

//   let topDiskCone = new ConeBufferGeometry(
//     parameters.topConeRadius, //radius : Float,
//     parameters.topConeHeight, //height : Float,
//     parameters.radialSegments, //radialSegments : Integer,
//     2, //heightSegments : Integer,
//     true, //openEnded : Boolean,
//     0, //thetaStart : Float,
//     2 * Math.PI //thetaLength : Float)
//   )
//   topDiskCone.rotateX(Math.PI)
//   topDiskCone.translate(
//     0,
//     parameters.cylinderHeight - parameters.topConeHeight / 2,
//     0
//   )

//   let connectionGeometry = new CylinderBufferGeometry(
//     parameters.connectionRadius,
//     parameters.connectionRadius,
//     parameters.connectionHeight,
//     32,
//     2,
//     false,
//     0,
//     2 * Math.PI
//   )
//   connectionGeometry.translate(0.0, -parameters.connectionHeight / 2, 0)

//   let gearGeometry1 = gearGeometry(
//     parameters.gear1OuterRadius,
//     parameters.gear1InnerRadius,
//     parameters.gear1Teeth,
//     {
//       steps: 1,
//       depth: parameters.gear1Height,
//       bevelEnabled: false,
//     }
//   )
//   gearGeometry1.rotateX(Math.PI / 2)
//   gearGeometry1.translate(0.0, -parameters.connectionHeight, 0.0)
//   let gear1 = new BufferGeometry().fromGeometry(gearGeometry1)

//   let gearGeometry2 = gearGeometry(
//     parameters.gear2OuterRadius,
//     parameters.gear2InnerRadius,
//     parameters.gear2Teeth,
//     {
//       steps: 1,
//       depth: parameters.gear2Height,
//       bevelEnabled: false,
//     }
//   )
//   gearGeometry2.rotateX(Math.PI / 2)
//   gearGeometry2.translate(
//     0.0,
//     -parameters.connectionHeight - parameters.gear1Height,
//     0.0
//   )
//   let gear2 = new BufferGeometry().fromGeometry(gearGeometry2)

//   let axisGeometry = new CylinderBufferGeometry(
//     parameters.axisRadiusTop,
//     parameters.axisRadiusBottom,
//     parameters.axisHeight,
//     64,
//     2,
//     false,
//     0,
//     2 * Math.PI
//   )
//   axisGeometry.translate(0, -parameters.axisHeight / 2, 0)
//   axisGeometry.translate(
//     0,
//     -parameters.connectionHeight -
//       parameters.gear2Height -
//       parameters.gear1Height,
//     0
//   )

//   group.add(new Mesh(axisGeometry, ironTextureMaterial))
//   group.add(new Mesh(connectionGeometry, ironTextureMaterial))
//   group.add(new Mesh(gear1, goldTextureMaterial))
//   group.add(new Mesh(gear2, bronzeTextureMaterial))
//   group.add(new Mesh(geometry, bronze))
//   group.add(new Mesh(topDiskGeometry, bronzeTextureMaterial))
//   group.add(new Mesh(bottomDiskGeometry, bronzeTextureMaterial))
//   group.add(new Mesh(topDiskCone, goldTextureMaterial))
// }

// let bronze, iron, gold, copper, lineMaterial
// let textureMaterial,
//   ironTextureMaterial,
//   goldTextureMaterial,
//   bronzeTextureMaterial

// let parameters = {
//   radialSegments: 280,
//   heightSegments: 170,

//   cylinderOn: true,
//   cylinderRadius: 11.5,
//   cylinderHeight: 41,
//   cylinderExtrusion: 1,
//   cylinderOpenEnded: true,

//   topConeRadius: 1.3,
//   topConeHeight: 1.5,

//   connectionOn: true,
//   connectionHeight: 1.5,
//   connectionRadius: 6,

//   gear1On: true,
//   gear1Height: 1.2,
//   gear1InnerRadius: 10.8,
//   gear1OuterRadius: 11.7,
//   gear1Teeth: 80,

//   gear2On: true,
//   gear2Height: 2.3,
//   gear2InnerRadius: 3,
//   gear2OuterRadius: 4.6,
//   gear2Teeth: 18,

//   axisOn: true,
//   axisHeight: 1.1,
//   axisRadiusTop: 1.1,
//   axisRadiusBottom: 1.1,

//   refresh: 0,
// }

// let extrusionFunction: (x: number, y: number) => number = (x, y) => 0

// // function imageBrightnessFunction() {
// //   let img = document.getElementById('birchimg')
// //   let canvas = document.createElement('canvas')
// //   canvas.width = img.width
// //   canvas.height = img.height
// //   canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height)

// //   let cctx = canvas.getContext('2d')
// //   let twopi = Math.PI * 2
// //   return function(phi, z) {
// //     let x = Math.floor((phi / twopi) * img.width)
// //     let y = Math.floor(z * img.height)
// //     let brightness
// //     if (x < img.width && y < img.height) {
// //       brightness = cctx.getImageData(x, y, 1, 1).data[0]
// //     } else {
// //       brightness = 255
// //     }
// //     // return brightness < 100 ? 1 : 0
// //     let ret = 1 - brightness / 255
// //     ret *= 1.4
// //     ret = Math.min(1, ret)
// //     // console.log(brightness)
// //     return ret
// //     // return brightness > 50 ? 1 : 0
// //   }
// //   // return () => Math.random()
// // }
