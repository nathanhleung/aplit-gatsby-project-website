const tour = {
  id: "gatsby-website",
  showPrevButton: true,
  steps: [
    {
      title: "Welcome",
      content:
        "Welcome to the homepage of <i>Old Sport</i>, the newest mixtape by MC JG.",
      target: "title",
      placement: "right"
    },
    {
      title: "The Homepage",
      content:
        "The first screen of the website is meant to convey " +
        "a sense of the wealth and opulence of Gatsby and his mansion. " +
        "The gradient-gold text gives off a metallic sheen, and the " +
        "color black is commonly associated with luxury. Furthermore, " +
        "the gold-patterned background is subtly, slowly panning up and " +
        "down, giving an impression of movement—just like the constant " +
        "movement within Gatsby's house during his parties." +
        "<br><br>&ldquo;The lights grow brighter as the earth lurches away " +
        "from the sun and now the orchestra is playing yellow " +
        "cocktail music and the opera of voices pitches a key " +
        "higher. Laughter is easier, minute by minute, spilled " +
        "with prodigality, tipped out at a cheerful word. The " +
        "groups change more swiftly, swell with new arrivals, " +
        "dissolve and form in the same breath—already there are " +
        "wanderers, confident girls who weave here and there " +
        "among the stouter and more stable&rdquo; (Fitzgerald 44).",
      target: "title",
      placement: "right"
    },
    {
      title: "Animations",
      content:
        "Your eyes were likely caught by some of the animations " +
        "of the text fading in and down. Like the moving background, " +
        "these animations are meant to convey the sense of constant " +
        "movement and revelry that was present not only in Gatsby's " +
        "mansion, but all throughout the Roaring 20s." +
        "<br><br>This constant revelry and excessiveness was not just limited to parties, though—it permeated " +
        "every facet of life during the time period. In our case, these animations " +
        "are not necessarily good web design, and in fact are sometimes " +
        "rather unnecessary. However, the 1920s were an age of " +
        "extravagant ostentation." +
        "<br><br>The Art Deco style, which gained popularity during the time " +
        "period, is a great example of a result of this zeitgeist. The Art Deco style " +
        "mixed elements, often contradictory, from cultures " +
        "from all around the world. Trademarks of the style were expensive " +
        "materials and exquisite craftsmanship, and " +
        "its sole purpose was to be avant-garde and show " +
        "off modernity and wealth. It aimed to convey a sense of " +
        "effortless luxury and leisure.",
      target: "title",
      placement: "bottom"
    },
    {
      title: "The Borders",
      content:
        "As we scroll down, notice the borders—reminscent of a wave, " +
        "cresting and crashing over and over again. These waves suggest " +
        "at Gatsby's symbolic (and previously, literal) role as a sailor: a newly moneyed person " +
        "exploring a world previously privy only to those in East Egg. " +
        "The placement of these waves is important. By scrolling " +
        "down, we must &ldquo;beat&rdquo; through the wave, rather than " +
        "ride over the wave (in other words, if the waves were rotated 90 " +
        "degrees and formed borders on the edges of the site, we'd be essentially " +
        "riding over them). This is " +
        "suggestive of the final line of the book, &ldquo;So we beat on, " +
        "boats against the current...&rdquo;, as well as Gatsby's eventual " +
        "failure at achieving his dream (Fitzgerald 189).",
      target: document.querySelectorAll(".wave-border")[0],
      placement: "top",
      xOffset: "center"
    },
    {
      title: "The Colors",
      content:
        "Also notable are the colors. As we move from one section to the " +
        "next, we alternate between rich, luxurious backgrounds to simple, " +
        "solid-color backgrounds. As a whole, this illustrates the " +
        "incongruity between Gatsby's appearance as a fabulously wealthy " +
        "man and his true start: as a humble, poor young man." +
        "<br><br>Furthermore, the selected colors of each section are important and " +
        "play a role. In this case, this blue symbolizes Gatsby's fanciful dreams " +
        "and the sadness and loneliness that results as those dreams are " +
        "left unfulfilled. Specifically, Gatsby's garden is described as &ldquo;blue&rdquo; " +
        "in order to illuminate how Gatsby's inner self feels this sadness and loneliness." +
        "as his wild dreams fly farther and farther from reality. " +
        "<br><br>&ldquo;The shadow of a tree fell abruptly across the dew and ghostly birds began " +
        "to sing among the blue leaves&rdquo; (Fitzgerald 159).",
      target: document.querySelectorAll(".wave-border")[0],
      placement: "bottom",
      xOffset: "center"
    },
    {
      title: "Fake Gold",
      content:
        "In this section, the golden text of the top part is exchanged " +
        "for plain yellow—further emphasizing the juxtaposition between " +
        "Gatsby's wealthy appearance and his humble beginnings. Specifically, " +
        "the use of yellow instead of gold hints at the idea of yellow being " +
        "&ldquo;fake gold&rdquo;, like Gatsby's car (which is &ldquo;cream colored&rdquo;)." +
        "<br><br>&rdquo;It was a rich cream color, bright with nickel, swollen here and there " +
        "in its monstrous length&ldquo; (Fitzgerald 68).",
      target: document.querySelectorAll("#about h2")[0],
      placement: "bottom",
      xOffset: "center"
    },
    {
      title: "Rose and Lavender Silk",
      content:
        "In this section, we again return to images of wealth and " +
        "opulence, this time of rose and lavender silk. This " +
        "references Nick's first full tour through Gatsby's mansion." +
        "<br><br>&ldquo;We went upstairs, through period bedrooms " +
        "swathed in rose and lavender silk and vivid with new " +
        "flowers, through dressing rooms and poolroms, and " +
        "bathrooms with sunken baths&rdquo; (Fitzgerald 96)." +
        "<br><br>Again, this image is moving because Gatsby's house " +
        "always has revelers in it—in this situation, &ldquo;Mr. " +
        "Klipspringer, the 'boarder.'&rdquo;",
      target: document.querySelectorAll("#inspiration h2")[0],
      placement: "top",
      xOffset: "center"
    },
    {
      title: "A Valley of Ashes",
      content:
        "The color scheme of this section is composed of " +
        "two different shades of grey, and is meant to emulate " +
        "the &ldquo;Valley of Ashes&rdquo;—the desolate wasteland " +
        "between West Egg and the city. The Valley of Ashes symbolizes " +
        "the failure of the American Dream, and the carelessness of " +
        "the upper classes. The source of the wealth for many in the upper " +
        "classes at the time was the industrialization occurring in areas like the " +
        "Valley of Ashes, but they still neglected it." +
        "<br><br>&rdquo;This is a valley of ashes—a fantastic " +
        "farm where ashes grow like wheat into ridges and hills " +
        "and grotesque gardens, where ashes take the forms of " +
        "houses and chimneys and rising smoke and finally, " +
        "with a transcendent effort, of men who move dimly " +
        "and already crumbling through the powdery air. " +
        "Occasionally a line of grey cars crawls along an " +
        "invisible track, gives out a ghastly creak and comes " +
        "to rest, and immediately the ash-grey men swarm up " +
        "with leaden spades and stir up and impenetrable " +
        "cloud which screens their obscure operations from " +
        "your sight&rdquo; (Fitzgerald 27)." +
        "<br><br>From a historical standpoint, the reason these slum-like " +
        "&ldquo;Valleys of Ashes&rdquo; developed was because of rapid " +
        "industrialization and urbanization in the wake of World War I, " +
        "from which America emerged relatively unscathed. The development of " +
        "skyscrapers led to the growth of cities and greater economic activity " +
        "being concentrated in less area, and other areas being neglected as " +
        "cities became more centralized.",
      target: document.querySelectorAll("#tracklist h2")[0],
      placement: "bottom",
      xOffset: "center"
    },
    {
      title: "Dreamy Green",
      content:
        "In this last section, the website finishes up " +
        "with a dark green hue, one of the most significant colors " +
        "in the text. Initailly, the green symbolizes Gatsby's original dream: " +
        "his desire to win back Daisy from Tom." +
        "<br><br>&ldquo;But I didn't call to him for he gave a " +
        "sudden intimation that he was content to be alone—he " +
        "stretched out his arms toward the dark water in a curious " +
        "way, and far as I was from him I could have sworn he was " +
        "trembling. Involuntarily I glanced seaward—and distinguished " +
        "nothing except a single green light, minute and far away, " +
        "that might have been the end of a dock&rdquo; (Fitzgerald 26)." +
        "<br><br>However, as the novel progresses, the symbolism of the " +
        "green light changes into a representation of the ceaseless pursuit " +
        "of that dream, even when it seems impossible." +
        "<br><br>&ldquo;Gatsby " +
        "believed in the green light, the orgastic future that year " +
        "by year recedes before us. It eluded us then, but that's " +
        "no matter—tomorrow we will run faster, stretch out our " +
        "arms farther... And one fine morning&rdquo; " +
        "(Fitzgerald 189)." +
        "<br><br>Like the original green light, the green section " +
        "is at the end of this website. While it is harder to get to " +
        "than the top sections, it is not necessarily unattainable." +
        "<br><br>In a historical sense, the symbolism of the green light " +
        "is important in that it represents the endless optimism of the 1920s. " +
        "During the time period, people had complete faith in technological " +
        "and social progress. The stock market was doing well, and even the " +
        "&ldquo;shoeshine boys&rdquo; were giving stock tips. Of course, " +
        "this all changed come 1929—but Fitzgerald's book concerns strictly the 20s.",
      target: document.querySelectorAll("#website h2")[0],
      placement: "top",
      xOffset: "center"
    },
    {
      title: "The Loading Screen",
      content:
        "Before we finish, one more thing—when you first loaded the " +
        "website, did you notice the loading screen? (If not, refresh now " +
        "if you'd like). The loading screen starts with a black background, " +
        "symbolizing emptiness—a fresh start, similar to Gatsby’s start " +
        "as an inconnu. As the website loads, a progress bar appears, colored " +
        "subtly gold. The growth of this progress bar suggests James Gatz’ " +
        "transformation into the fabulously wealthy Jay Gatsby." +
        "<br><br>At the center of the screen is a pulsating loading " +
        "indicator, which is green—an homage to Gatsby’s longing for " +
        "the green light at the end of Daisy’s dock. As Gatsby's wealth " +
        "increases, he believes he is closer and closer to winning Daisy. " +
        "<br><br>Yet, the progress bar is an illusion. No matter what, you are " +
        "forced to wait a frustrating fifteen seconds to enter the site. " +
        "The progress bar moves without regard to the actual process of the " +
        "website loading, and in fact, the website loads in less than a " +
        "second. Irrespective of connection speed or the speed of your " +
        "computer, you have to wait. This is meant to suggest the eventual " +
        "futility of Gatsby’s goal and the hollowness of the upper class—no " +
        "matter what he does, he will not be able to truly join " +
        "the “old money.” Likewise, you cannot do anything to speed " +
        "up the load time. All you can do is sit back and enjoy the show.",
      target: document.querySelectorAll("#website h2")[0],
      placement: "top",
      xOffset: "center"
    },
    {
      title: "Thank You",
      content:
        "Thank you for visiting the homepage of the " +
        "<i>Old Sport</i> mixtape. Please check out each of the sections " +
        "of the site to learn about the lyrics and how it was created. " +
        "If you ever want to take the website-specific tour again, click the button below. Happy listening!",
      target: document.querySelectorAll("#website .btn-outline-light")[0],
      placement: "top"
    }
  ]
};
