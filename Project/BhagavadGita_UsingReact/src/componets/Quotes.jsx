import React, { useState, useEffect } from "react";
import './Quotes.css'

function Quotes(){
   const gitaQuotes = [
  {
    id: 1,
    quote: "Whenever dharma declines and the purpose of life is forgotten, I manifest myself on earth. I am born in every age to protect the good, to destroy evil, and to reestablish dharma."
  },
  {
    id: 2,
    quote: "You have the right to work, but for the work's sake only. You have no right to the fruits of work."
  },
  {
    id: 3,
    quote: "Perform every action with your heart fixed on the Supreme Lord. Renounce attachment to the fruits. Be even-tempered in success and failure."
  },
  {
    id: 4,
    quote: "You are what you believe in. You become that which you believe you can become."
  },
  {
    id: 5,
    quote: "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place."
  },
  {
    id: 6,
    quote: "Death is as sure for that which is born, as birth is for that which is dead. Therefore grieve not for what is inevitable."
  },
  {
    id: 7,
    quote: "The soul can never be cut to pieces by any weapon, nor burned by fire, nor moistened by water, nor withered by the wind."
  },
  {
    id: 8,
    quote: "Perform action, O Arjuna, being steadfast in Yoga, abandoning attachment and balanced in success and failure. Evenness of mind is called Yoga."
  },
  {
    id: 9,
    quote: "The mind is difficult to control and restless; but by practice and by dispassion it may be restrained."
  },
  {
    id: 10,
    quote: "A person can rise through the efforts of his own mind; or draw himself down in the same manner. Because each person is his own friend or enemy."
  },
  {
    id: 11,
    quote: "One who sees inaction in action, and action in inaction, is intelligent among men."
  },
  {
    id: 12,
    quote: "The key to equanimity: act without attachment, treat success and failure alike."
  },
  {
    id: 13,
    quote: "Set thy heart upon thy work, but never on its reward."
  },
  {
    id: 14,
    quote: "Happiness from the senses seems like nectar initially, but it is bitter as poison in the end."
  },
  {
    id: 15,
    quote: "There is neither this world nor the world beyond nor happiness for the one who doubts."
  },
  {
    id: 16,
    quote: "The truly wise mourn neither for the living nor for the dead."
  },
  {
    id: 17,
    quote: "Whenever and wherever there is a decline in virtue and a rise of irreligion, O Arjuna, at that dawn, I appear."
  },
  {
    id: 18,
    quote: "To protect the innocent, to annihilate the wicked, to reestablish righteousness, I birth Myself in every age."
  },
  {
    id: 19,
    quote: "As the ignorant perform their duties with attachment, the learned may act without attachment, to guide."
  },
  {
    id: 20,
    quote: "He who is content with whatever comes, without attachment, not disappointed when he gets nothing, is wise."
  },
  {
    id: 21,
    quote: "Calmness, gentleness, silence, self-restraint, and purity: these are the disciplines of the mind."
  },
  {
    id: 22,
    quote: "For one who has conquered his mind, a mind is best of friends; for one who has failed to do so, it is the greatest enemy."
  },
  {
    id: 23,
    quote: "One who is not disturbed in mind even amidst the threefold miseries or elated when there is happiness, and who is free from attachment, fear and anger, is called a sage of steady mind."
  },
  {
    id: 24,
    quote: "Let your aim be the welfare of all. Then act with devotion and without selfishness."
  },
  {
    id: 25,
    quote: "Even if you are the most sinful of all sinners, yet you shall cross over all sin by the raft of knowledge."
  },
  {
    id: 26,
    quote: "Actions do not cling to Me because I am not attached to their results."
  },
  {
    id: 27,
    quote: "Better is one’s own duty though lacking in merit than the duty of another perfectly performed."
  },
  {
    id: 28,
    quote: "Man is made by his belief. As he believes, so he becomes."
  },
  {
    id: 29,
    quote: "The ignorant work for their own profit; the wise work for the welfare of the world."
  },
  {
    id: 30,
    quote: "The soul is eternal, indestructible; weapons cannot pierce it, fire cannot burn it, water cannot wet it."
  },
  {
    id: 31,
    quote: "Like changing clothes, the soul passes from one body to another."
  },
  {
    id: 32,
    quote: "The soul is never born, nor does it ever die."
  },
  {
    id: 33,
    quote: "They are both ignorant who think the soul kills or is killed."
  },
  {
    id: 34,
    quote: "As the embodied soul continuously passes from boyhood to youth to old age, so at death, it takes another body."
  },
  {
    id: 35,
    quote: "For one who has conquered the mind, the mind is a friend; the uncontrolled mind is one’s greatest enemy."
  },
  {
    id: 36,
    quote: "Perform your prescribed duty, for action is better than inaction."
  },
  {
    id: 37,
    quote: "One who does nothing for sense gratification but works for self-purification merges into self."
  },
  {
    id: 38,
    quote: "The disciplined mind is steady in meditation, like a lamp in a windless place."
  },
  {
    id: 39,
    quote: "He who has no attachments can truly love others, for his love is pure."
  },
  {
    id: 40,
    quote: "There is nothing as purifying as knowledge."
  },
  {
    id: 41,
    quote: "When meditation is mastered, Self reveals itself."
  },
  {
    id: 42,
    quote: "From attachment arises desire, from desire arises anger."
  },
  {
    id: 43,
    quote: "Through meditation, the yogi obtains the peace that resides in the Self."
  },
  {
    id: 44,
    quote: "Even in a land of misery, one who knows it stays free from despair."
  },
  {
    id: 45,
    quote: "Whatever happened, happened for good. Whatever is happening, is happening for good."
  },
  {
    id: 46,
    quote: "Every individual is working out his own salvation."
  },
  {
    id: 47,
    quote: "By selfless service, you will always find fulfillment."
  },
  {
    id: 48,
    quote: "Man is made by his belief. As he believes, so he is."
  },
  {
    id: 49,
    quote: "Let a man lift himself by his own self, and let him not lower himself."
  },
  {
    id: 50,
    quote: "Those who worship Me with devotion, I carry what they lack and preserve what they have."
  },
  {
    id: 51,
    quote: "He who has faith and is devoted, and has subdued the senses, obtains knowledge."
  },
  {
    id: 52,
    quote: "The one who neither rejoices nor hates, neither grieves nor desires, renouncing good and evil, is dear to Me."
  },
  {
    id: 53,
    quote: "With a mind disciplined by yoga, he sees the Self in all beings and all beings in the Self."
  },
  {
    id: 54,
    quote: "The yogi is greater than the ascetic, greater than the man of knowledge, and greater than the man of action."
  },
  {
    id: 55,
    quote: "Those who surrender themselves to Me, I grant them the understanding by which they come to Me."
  },
  {
    id: 56,
    quote: "All beings are in Me, but I am not in them."
  },
  {
    id: 57,
    quote: "As the mighty wind, moving everywhere, rests always in the sky, so do all beings rest in Me."
  },
  {
    id: 58,
    quote: "He who offers to Me with devotion a leaf, a flower, a fruit, or water, I accept that loving offering."
  },
  {
    id: 59,
    quote: "Whatever you do, whatever you eat, whatever you offer or give away, do that as an offering to Me."
  },
  {
    id: 60,
    quote: "One who is devoted to Me and works without attachment reaches Me."
  },
  {
    id: 61,
    quote: "Those who always worship Me with exclusive devotion, I give them what they need."
  },
  {
    id: 62,
    quote: "He who has no ill will to any being, who is friendly and compassionate, free from possessiveness and ego, is dear to Me."
  },
  {
    id: 63,
    quote: "The devotee who is content, self-controlled, firm in faith, and with mind and intellect dedicated to Me, is dear to Me."
  },
  {
    id: 64,
    quote: "Fix your mind on Me, be devoted to Me, sacrifice to Me, bow down to Me, you shall surely come to Me."
  },
  {
    id: 65,
    quote: "The wise see the same soul in a learned priest, a cow, an elephant, a dog, and an outcaste."
  },
  {
    id: 66,
    quote: "Those who are free from anger and all material desires, who are self-realized and controlled, attain liberation."
  },
  {
    id: 67,
    quote: "The Lord dwells in the hearts of all beings, O Arjuna, causing them to revolve by His power, as if mounted on a machine."
  },
  {
    id: 68,
    quote: "Take refuge in Him alone, O Arjuna. By His grace you will attain supreme peace."
  },
  {
    id: 69,
    quote: "A man who is free from attachment, who is liberated, whose mind is established in knowledge, gives up all action as if performing sacrifices."
  },
  {
    id: 70,
    quote: "The one who has conquered the senses and the mind, who is devoted to the welfare of all beings, attains peace."
  },
  {
    id: 71,
    quote: "Renouncing all desires born of the will, and restraining the senses on all sides, one should gradually withdraw."
  },
  {
    id: 72,
    quote: "The yogi who is satisfied with knowledge and wisdom, unshaken, with senses subdued, to a clod, stone, and gold regards equally."
  },
  {
    id: 73,
    quote: "He who is equal to friend and foe, in honor and dishonor, in cold and heat, in pleasure and pain, who is free from attachment, is dear to Me."
  },
  {
    id: 74,
    quote: "This body is called the field; one who knows it is called the knower of the field."
  },
  {
    id: 75,
    quote: "I am the seed of all beings, O Arjuna. There is no being that can exist without Me."
  },
  {
    id: 76,
    quote: "I am the beginning, the middle, and the end of all beings."
  },
  {
    id: 77,
    quote: "Among immovable things, I am the Himalayas."
  },
  {
    id: 78,
    quote: "Of weapons, I am the thunderbolt; of cows, I am the wish-fulfilling cow."
  },
  {
    id: 79,
    quote: "Of creations, I am the beginning and the end and also the middle, O Arjuna."
  },
  {
    id: 80,
    quote: "Of lights, I am the radiant sun; of the senses, I am the mind."
  },
  {
    id: 81,
    quote: "I am the gambling of the cheats, the splendor of the splendid."
  },
  {
    id: 82,
    quote: "I am the silence of the secrets, and the wisdom of the wise."
  },
  {
    id: 83,
    quote: "Of seasons, I am the flower-bearing spring."
  },
  {
    id: 84,
    quote: "Of purifiers, I am the wind; of wielders of weapons, I am Rama."
  },
  {
    id: 85,
    quote: "Of serpents, I am Ananta; of aquatic beings, I am Varuna."
  },
  {
    id: 86,
    quote: "Of rivers, I am the Ganga."
  },
  {
    id: 87,
    quote: "I am the beginningless Self, the cause of all causes."
  },
  {
    id: 88,
    quote: "Those who know Me as unborn and without beginning, as the supreme Lord of worlds, are undeluded."
  },
  {
    id: 89,
    quote: "Even a little practice of this dharma protects one from great fear."
  },
  {
    id: 90,
    quote: "No effort on the path is ever lost, nor is there any harm."
  },
  {
    id: 91,
    quote: "The yogi who constantly remembers Me with an undivided mind attains Me."
  },
  {
    id: 92,
    quote: "One who surrenders all actions to Me, regarding Me as the supreme goal, attains eternal peace."
  },
  {
    id: 93,
    quote: "Those who, fixing their mind on Me, constantly worship Me with firm faith, are considered by Me the highest."
  },
  {
    id: 94,
    quote: "The devotee who delights in the welfare of all beings, who is content, forgiving, and self-controlled, is dear to Me."
  },
  {
    id: 95,
    quote: "Among sacrifices, I am the chanting of holy names."
  },
  {
    id: 96,
    quote: "The one who studies this sacred dialogue of ours, by him I am worshiped with the sacrifice of knowledge."
  },
  {
    id: 97,
    quote: "Whoever hears this with faith, without envy, is liberated and attains auspicious realms."
  },
  {
    id: 98,
    quote: "Wherever there is Krishna, the Lord of Yoga, and Arjuna, the archer, there will be victory, prosperity, and righteousness."
  },
  {
    id: 99,
    quote: "The wise who seek refuge in the Lord, free from delusion, purified by knowledge, reach the supreme goal."
  },
  {
    id: 100,
    quote: "Fix your mind on Me alone, rest your intellect in Me; thus you will live in Me hereafter."
  },
  {
    id: 101,
    quote: "Abandon all varieties of dharma and simply surrender unto Me. I shall deliver you from all sinful reactions; do not fear."
  }
];
    return(
    <>
  {/* Image Section */}
  <div className="img-div">
    <img src="/img/i2_quotes.webp" alt="Bhagavad Gita" />
    <div className="txt">
      <h2>Bhagavad Gita Quotes By</h2>
      <h2><span>Lord Krishna</span></h2>
    </div>
  </div>


  {/* Carousel */}
  <div id="quoteCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      {gitaQuotes && gitaQuotes.length > 0 ? (
        gitaQuotes.map((quo, idx) => (
          <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={quo.id}>
            <div className="quote-container">
              <div className="quote-number">QUOTE {quo.id}</div>
              <div className="quote-text">{quo.quote}</div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">Loading quotes...</div>
      )}
    </div>

    {/* Prev & Next */}
    <button className="carousel-control-prev" type="button" data-bs-target="#quoteCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#quoteCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</>

    )
}

export default Quotes