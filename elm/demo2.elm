import Mouse
import Window

type Stamps = { pos : (Int,Int), stamps : [(Int,Int)]}

main : Signal Element
main = lift2 scene Window.dimensions fancyClicks

clickLocations : Signal [(Int,Int)]
clickLocations = foldp (::) [] (sampleOn Mouse.clicks Mouse.position)

fancyClicks : Signal Stamps
fancyClicks = lift2 (\p clicks -> {pos = p, stamps = clicks}) Mouse.position clickLocations

scene : (Int,Int) -> Stamps -> Element
scene (w,h) {pos, stamps} =
  let drawPentagon (x,y) =
          ngon 5 20 |> filled (hsla (toFloat x) 0.9 0.6 0.7)
                    |> move (toFloat x - toFloat w / 2, toFloat h / 2 - toFloat y)
                    |> rotate (toFloat x)
      new_locs = pos :: stamps
  in  layers [ collage w h (map drawPentagon new_locs)
             , plainText "Click to stamp a pentagon." ]

