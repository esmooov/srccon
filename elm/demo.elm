module Stamper where
 
import Mouse
import Window
 
main = lift2 renderStamps Window.dimensions clickLocations
 
clickLocations = foldp (::) [] (sampleOn Mouse.clicks Mouse.position)
 
renderStamps (w,h) locs =
  let pentagon (x,y) =
          ngon 5 20 |> filled (hsl 0.3 0.7 0.5)
                    |> move (toFloat x - toFloat w / 2, toFloat h / 2 - toFloat y)
                    |> rotate (toFloat x)
  in  layers [ collage w h (map pentagon locs)
             , plainText "Click to stamp a pentagon." ]
             
