import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Securing Node JS: Best Practices and Tips</h1>
        <p>
          The most beautiful spectacle is the evening gathering of the Tweeps.
          In autumn, these blue birds join together in large flocks and gather
          at the ponds. Here they will spend the night sharing hot takes and
          retweeting “youre telling me a shrimp fried this rice?” for the
          thousandth time. There may be several thousands of birds in one place,
          but they all yearn to “go viral”, a task that will require gathering a
          few hundred thousand in one place. The ones who accomplish it will get
          to make a dry joke about what they call their non-existent soundcloud
          link. But wait! Something is stirring. A wave of panic washes over the
          birds. Some of them begin to make their tweeting sound to warn the
          others. Their gathering site has been invaded by another creature. He
          is not quite a bird, and the birds can sense it. His off-putting musk
          fills the air. He carries a large, white ceramic bathroom sink into
          their site and declares that it belongs to him now. It is not even
          nightfall when the creature begins to freeze the gathering site. The
          air feels very different. A group of aggressive vultures gathers by
          the ponds. Over the next few days, the trees where the birds nest
          begin to shake, and the water sources start to ice over. A cold and
          sudden winter will freeze the birds unless they find a new site to
          re-establish their flock. You hear their twittering throughout the
          night. The haze grows thicker. Early morning comes. The birds delay
          their departure until the fog has settled. Fights among some of the
          birds break out. Sometimes the creature joins the quarrel and
          arbitrarily fells a tree. When he opens his mouth, the sound that
          comes out is “$8!”. During this season, a group of magpies come to the
          site. The young inexperienced magpies try to catch a blue bird. Very
          quickly, they learn this is not a good idea. The sun rises higher and
          higher, and the blue birds prepare to fly away. At last, they soar
          into the air. Alas, the V-shaped formation fails to materialize. It
          looks more like a broken I or maybe an S. Wait. Is that an X? The
          birds separate and small groups fly in different directions. Some of
          them turn around and return to the original site. By morning, a few
          birds are still lingering. Others have found a new, smaller home in an
          extinct pachyderms skeleton. They hang on to its tusks and nestle
          inside its yellowed ribs. Some of the others are in a…beehive? The
          birds are confused. These are unfamiliar lands. The birds miss their
          flock. Their favorite birds are not on the new sites and some of them
          fly back to the old site to gather more birds to bring back to the new
          one. When they return, they find the air is even colder and their
          nests have cobwebbed over. They make their Tweet sound, and it echoes
          through the emptier lands. There is only a faint reply. The not-bird
          creature who owns the site hacks down some trees and more nests are
          lost. Some of the birds stay. They hope he will soon find a new
          distraction and leave. Some more fly away. Others fly back and forth
          between their old and new homes. For now, the birds have found places
          to spend the night. The morning sun will reveal what is to come the
          next day. Sauleha Kamal is a Pakistani-American writer and researcher
          currently based in England where she is finishing her PhD. She has
          work in publications like The Atlantic, Catapult, Dawn, as well as
          some academic journals and anthologies. Find her on Twitter
          @Sauliloquy1 for as long as it exists or at
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
