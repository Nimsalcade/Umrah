// Umrah Guide Flashcard App - JavaScript
class UmrahFlashcardApp {
    constructor() {
        this.currentCardIndex = 0;
        this.flashcards = this.generateFlashcards();
        this.initializeElements();
        this.setupEventListeners();
        this.renderCurrentCard();
        this.updateProgress();
        this.generateNavigationDots();
    }

    generateFlashcards() {
        return [
            // General - Definitions and Concepts
            {
                category: "General",
                title: "Definition of Umrah",
                content: `
                    <p><strong>Linguistically:</strong> To visit</p>
                    <p><strong>Technically:</strong> Umrah is a way of worshipping Allah by making Tawaf of the Kabah and Sai between Mount Safa and Marwa and shaving or cutting the hair.</p>
                `,
                arabic: ""
            },
            {
                category: "General",
                title: "Islamic Ruling on Umrah",
                content: `
                    <p>It is <strong>obligatory at least once in a lifetime</strong> as found in this hadith:</p>
                    <p><em>"O Messenger of Allah, do women have to engage in jihad? He said, Yes, they must do jihad in which there is no fighting: Hajj and Umrah"</em></p>
                    <p><strong>Source:</strong> Ibn Majah (2901)</p>
                `,
                arabic: ""
            },
            {
                category: "General",
                title: "Virtues of Umrah",
                content: `
                    <p>• Umrah is known to be the <strong>minor Hajj</strong></p>
                    <p>• It is a <strong>Sunnah act</strong> performed at anytime of the year</p>
                    <p>• <em>"One Umrah is an expiation for the sins committed between it and another Umrah"</em> - [Bukhari, Muslim]</p>
                    <p>• One should strive to perform Umrah multiple times in their lives</p>
                `,
                arabic: ""
            },
            {
                category: "General",
                title: "Conditions for Umrah",
                content: `
                    <ul>
                        <li><strong>Islam</strong></li>
                        <li><strong>Puberty</strong></li>
                        <li><strong>Sanity</strong></li>
                        <li><strong>Freedom</strong></li>
                        <li><strong>Capability</strong> (physically & financially)</li>
                        <li><strong>Mahram companion for Women</strong></li>
                    </ul>
                `,
                arabic: ""
            },
            {
                category: "General",
                title: "Pillars of Umrah",
                content: `
                    <ol>
                        <li><strong>Ihram</strong> (Intention to enter the state of Umrah)</li>
                        <li><strong>Tawaf</strong></li>
                        <li><strong>Sai</strong></li>
                    </ol>
                    <p><strong>Important:</strong> If one leaves a Pillar, he/she must return & make the missed pillar, if not, then his/her Umrah is invalidated.</p>
                `,
                arabic: ""
            },
            {
                category: "General",
                title: "Obligations of Umrah",
                content: `
                    <ol>
                        <li><strong>Ihram at the Miqat</strong></li>
                        <li><strong>Shaving or Cutting the Hair</strong></li>
                    </ol>
                    <p><strong>If missed:</strong> A Fidyah (Compensation) is needed by sacrificing in Makkah: A sheep, or 1/7 of a Cow or 1/7 of a Camel and distributing it to the poor in Makkah.</p>
                `,
                arabic: ""
            },

            // Miqat Section
            {
                category: "Miqat",
                title: "Miqat in Terms of Time",
                content: `
                    <p><strong>For Hajj:</strong> The months of Hajj</p>
                    <p><strong>For Umrah:</strong> At any time of the year</p>
                    <p>• Those who live within the radius of the Miqat can make Ihram from their homes</p>
                    <p>• People living in Makkah need to go out of the boundaries of Makkah to make Ihram</p>
                `,
                arabic: ""
            },
            {
                category: "Miqat",
                title: "Modern Travel Considerations",
                content: `
                    <p>As nowadays people come by flights from all parts of the world, they should either:</p>
                    <ul>
                        <li>Get into Ihram <strong>before boarding the flight</strong>, or</li>
                        <li>Just <strong>before flying over the Miqat</strong></li>
                    </ul>
                    <p><em>Note: There is an announcement made in Saudi or Qatar Airlines before approaching the Miqat.</em></p>
                `,
                arabic: ""
            },
            {
                category: "Miqat",
                title: "Physical Miqat Locations",
                content: `
                    <ul>
                        <li><strong>Dhu'l-Hulayfah:</strong> ~9 km from Medina, 450 km from Mecca (from Medina direction)</li>
                        <li><strong>Qarn ul-Manazil:</strong> 85 km from Mecca (Najd region)</li>
                        <li><strong>Yalamlam:</strong> For pilgrims from Yemen</li>
                        <li><strong>Juhfah:</strong> 190 km northwest of Mecca (from Ash-Shaam)</li>
                        <li><strong>Dhat-i 'Irq:</strong> 85 km northeast of Mecca (Iraq, Iran)</li>
                    </ul>
                `,
                arabic: ""
            },

            // Ihram Section
            {
                category: "Ihram",
                title: "Ihram Clothing for Men",
                content: `
                    <p><strong>Men should wear:</strong></p>
                    <ul>
                        <li>Two towels/sheets (preferably white)</li>
                        <li>One wrapped around the lower part of the body</li>
                        <li>One around the upper part of the body</li>
                        <li>Sandals</li>
                    </ul>
                    <p><strong>Note:</strong> IDHTIBA (Uncovering the right shoulder) is only done during Tawaf</p>
                `,
                arabic: ""
            },
            {
                category: "Ihram",
                title: "Ihram Clothing for Women",
                content: `
                    <p><strong>Women should wear:</strong></p>
                    <ul>
                        <li>The clothes she usually wears when leaving the house</li>
                        <li><strong>Except:</strong> No gloves and no niqab</li>
                        <li>Should uncover face if possible (when not around non-mahram men)</li>
                        <li>If needed, cover face with a scarf rather than niqab</li>
                    </ul>
                `,
                arabic: ""
            },
            {
                category: "Ihram",
                title: "Initial Talbiyah",
                content: `
                    <p>Begin with the intended act of worship by saying <strong>once:</strong></p>
                    <p><strong>Transliteration:</strong> <em>Labayk Allahumma Bi-Umrah</em></p>
                    <p><strong>Meaning:</strong> "O Allah, here I am responding to you to make Umrah"</p>
                `,
                arabic: "❁ لَـبَّـيكَ ٱللّـهـمَّ بِعمرة ❁"
            },
            {
                category: "Ihram",
                title: "Optional Conditional Statement",
                content: `
                    <p>If one fears obstruction during Umrah, they may add:</p>
                    <p><strong>Transliteration:</strong> <em>Allaahumma mahillee haithu habastanee</em></p>
                    <p><strong>Meaning:</strong> "I come out of the state of Ihram from the place You prevent me from continuing"</p>
                `,
                arabic: "❁ اللَّهمَّ محلّي حيث حبستَني ❁"
            },
            {
                category: "Ihram",
                title: "Repeated Talbiyah",
                content: `
                    <p>Then repeatedly say until you start Tawaf:</p>
                    <p><strong>Transliteration:</strong> <em>Labbayk Allahumma labbayk, labbayka laa shareeka laka labbayk, innal hamda wan-ni'mata laka wal-mulk, laa shareeka lak</em></p>
                    <p><strong>Meaning:</strong> "Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Verily all praise, grace and sovereignty belong to You. You have no partner."</p>
                `,
                arabic: "❁ لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ ، إِنَّ الْحَمْدَ والنِّعْمَةَ لَكَ وَالْمُلْكُ ، لَا شَرِيكَ لَكَ ❁"
            },
            {
                category: "Ihram",
                title: "Ihram Restrictions - Men",
                content: `
                    <p><strong>Men are prohibited from:</strong></p>
                    <ul>
                        <li>Wearing regular or sewn clothes, including shoes</li>
                        <li>Covering the head (even with the Ihram cloth)</li>
                    </ul>
                    <p><em>If violated, compensation (fidyah) is required.</em></p>
                `,
                arabic: ""
            },
            {
                category: "Ihram",
                title: "Ihram Restrictions - Women",
                content: `
                    <p><strong>Women are prohibited from:</strong></p>
                    <ul>
                        <li>Wearing gloves</li>
                        <li>Wearing Niqab</li>
                    </ul>
                `,
                arabic: ""
            },
            {
                category: "Ihram",
                title: "Ihram Restrictions - Both Genders",
                content: `
                    <p><strong>Both men and women are prohibited from:</strong></p>
                    <ul>
                        <li>Cutting or plucking hair from any part of the body</li>
                        <li>Clipping fingernails or toenails</li>
                        <li>Applying perfume while in Ihram</li>
                        <li>Sexual activity</li>
                        <li>Sexual intercourse (requires Major Fidyah)</li>
                        <li>Hunting/catching animals</li>
                        <li>Making marriage contracts or engagements</li>
                        <li>Cutting trees/plants in Haram</li>
                    </ul>
                `,
                arabic: ""
            },
            {
                category: "Ihram",
                title: "Common Ihram Misconceptions",
                content: `
                    <ul>
                        <li>✓ Women may wear anything Islamically permissible for Ihram</li>
                        <li>✓ It is ALLOWED to wear a belt in Ihram, whether stitched or not</li>
                        <li>✓ Women in their menses must still be in a state of Ihram</li>
                        <li>✗ Do not pass the Miqat without being in the state of Ihram</li>
                        <li>✗ Do not uncover your right shoulder until you reach the Kabah</li>
                    </ul>
                `,
                arabic: ""
            },

            // Tawaf Section
            {
                category: "Tawaf",
                title: "Idtiba for Men During Tawaf",
                content: `
                    <p><strong>Idtiba:</strong> Men should leave their right shoulder bare ONLY during the entire Tawaf.</p>
                    <p>After the Tawaf, men need to cover both shoulders.</p>
                    <p><em>Note: A person can do Tawaf in their regular clothes if they are not doing Umrah.</em></p>
                `,
                arabic: ""
            },
            {
                category: "Tawaf",
                title: "Starting Tawaf at the Black Stone",
                content: `
                    <p>Start at the Black Stone by doing any of the following:</p>
                    <ol>
                        <li><strong>Kiss it</strong> if you can</li>
                        <li>If not, <strong>touch it with your right hand</strong></li>
                        <li>If not possible, <strong>face the Black Stone and point at it</strong> with your right hand</li>
                    </ol>
                    <p>While doing any of these, say:</p>
                    <p><strong>Transliteration:</strong> <em>Allahu Akbar</em></p>
                    <p><strong>Meaning:</strong> "Allah is the greatest"</p>
                `,
                arabic: "❁ اللهُ أَكْبَرُ ❁"
            },
            {
                category: "Tawaf",
                title: "Ramal During Tawaf",
                content: `
                    <p><strong>For men:</strong> It is preferred to make ramal (fast walk) during the first three rounds.</p>
                    <p><strong>Walk normally</strong> between the Yamaani Corner and the Black Stone.</p>
                    <p><strong>Dua during Tawaf:</strong> You can make dua, tasbeeh, tahleel, etc. There is no specific dua for each round.</p>
                `,
                arabic: ""
            },
            {
                category: "Tawaf",
                title: "The Yamaani Corner",
                content: `
                    <p>When you reach the Yamaani Corner:</p>
                    <ul>
                        <li><strong>Touch it with your right hand</strong> if possible</li>
                        <li>If not possible, <strong>do not kiss or point</strong></li>
                    </ul>
                `,
                arabic: ""
            },
            {
                category: "Tawaf",
                title: "Drinking Zamzam Water",
                content: `
                    <p><strong>After Tawaf, go to Zamzam Wells (Preferable/Sunnah):</strong></p>
                    <ul>
                        <li>Make dua before drinking</li>
                        <li>Drink Zamzam water to your fill</li>
                        <li>Pour water over your head (in moderation)</li>
                    </ul>
                    <p><em>"The water of Zamzam is for whatever it is drunk for."</em> - Prophet Muhammad (ﷺ)</p>
                `,
                arabic: ""
            },
            {
                category: "Tawaf",
                title: "Common Tawaf Misconceptions",
                content: `
                    <ul>
                        <li>✗ You do not have to say your intention out loud to begin Tawaf</li>
                        <li>✗ You do not have to touch the black stone for your Tawaf to be accepted</li>
                        <li>✗ Do not kiss the Yemeni corner. Only touch it with your right hand</li>
                        <li>✗ Do not worship the black stone. You are glorifying Allah by following the Sunnah</li>
                        <li>✗ The Black Stone cannot benefit or harm anyone. It is only a Sunnah to kiss it</li>
                    </ul>
                `,
                arabic: ""
            },
            {
                category: "Tawaf",
                title: "Tawaf Etiquette",
                content: `
                    <ul>
                        <li>✗ It is not prescribed to push and shove when touching the Black Stone or Yemeni Corner</li>
                        <li>✓ Do so calmly or simply point</li>
                        <li>✓ Make Dua by yourself; do not do it in a shouting group around the Kabah</li>
                        <li>✓ The Kabah should be to your left during Tawaf</li>
                        <li>✗ Do not face your back to the Kabah</li>
                    </ul>
                `,
                arabic: ""
            },

            // Sai Section
            {
                category: "Sai",
                title: "Introduction to Sai",
                content: `
                    <p><strong>Sai:</strong> Walking between As-Safa and Al-Marwah in worship</p>
                    <p><strong>Key point:</strong> Walking from as-Safa to al-Marwah is one trip; from al-Marwah back to as-Safa is another trip.</p>
                    <p><em>Having Wudu is highly recommended but not obligatory.</em></p>
                `,
                arabic: ""
            },
            {
                category: "Sai",
                title: "Conditions of Sai",
                content: `
                    <ol>
                        <li><strong>Niyyah (intention)</strong></li>
                        <li><strong>To make Tawaf first</strong></li>
                        <li><strong>To make seven continual trips</strong>, starting from as-Safa and ending at al-Marwah</li>
                    </ol>
                `,
                arabic: ""
            },
            {
                category: "Sai",
                title: "Leaving the Masjid for Sai",
                content: `
                    <p>As you leave the boundary of the Masjid, you can say (as prescribed for all Masajid):</p>
                    <p><strong>Transliteration:</strong> <em>Bismillahi was-salaatu was-salaamu 'alaa Rasoolillahi, Allaahumma innee as'aluka min fadlik, Allaahumma a'simnee minash-shaytaanir-rajeem</em></p>
                    <p><strong>Meaning:</strong> "In the name of Allah, and prayers and peace be upon the Messenger of Allah. O Allah, I ask You from Your favour. O Allah, guard me from the accursed devil."</p>
                `,
                arabic: "❁ بِسْمِ اللهِ، وَالصَّلَاةُ وَالسَّلَّامُ عَلَى رَسُولِ اللهِ، اللَّهُمَّ إَنِّي أَسْأَلُكَ مِنْ فَضْلِكَ، اللَّهُمَّ اعصِمْنِي مِنَ الشَّيْطَانِ الرَّجِيمِ ❁"
            },
            {
                category: "Sai",
                title: "Starting at As-Safa",
                content: `
                    <p><strong>At the bottom of the hill of as-Safa, say (only once):</strong></p>
                    <p><strong>Transliteration:</strong> <em>Innas-Safa wal-Marwata min sha'aa'irillah, abdau bima bada Allahu bih</em></p>
                    <p><strong>Meaning:</strong> "Verily, as-Safa and al-Marwah are among the rites of Allah. I start with what Allah started with."</p>
                    <p><em>This is said only when starting the Sai, and should not be repeated.</em></p>
                `,
                arabic: "❁ إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللهِ أَبْدَأُ بِمَا بَدَأَ اللهُ بِهِ ❁"
            },
            {
                category: "Sai",
                title: "On Top of As-Safa Hill",
                content: `
                    <p><strong>Climb up the hill of as-Safa, face the Kabah, raise hands in dua, and say three times:</strong></p>
                    <p><strong>Transliteration:</strong> <em>Allahu Akbar, Allahu Akbar, Allahu Akbar. La ilaha illallahu wahdahu la shareeka lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadeer</em></p>
                    <p><strong>Meaning:</strong> "Allah is the Greatest, Allah is the Greatest, Allah is the Greatest. None has the right to be worshiped except Allah alone, without partner. His is the dominion and His is the praise, and He is Able to do all things."</p>
                    <p>Then praise Allah, send Salaam upon Muhammad (ﷺ), and make personal duas. Pray for both the goodness of this life and the next.</p>
                `,
                arabic: "❁ اللهُ أَكْبَرُ ، اللهُ أَكْبَرُ ، اللهُ أَكْبَرُ لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ❁"
            },
            {
                category: "Sai",
                title: "Ending at Al-Marwah",
                content: `
                    <p><strong>Climb up the hill of al-Marwah, face the Kabah, and say what was said on the hill of as-Safa</strong></p>
                    <p><strong>Note for males:</strong> It is preferred during Sai to run between the two green signs.</p>
                `,
                arabic: ""
            },
            {
                category: "Sai",
                title: "Common Sai Misconceptions",
                content: `
                    <ul>
                        <li>✓ Although preferable, you do not have to have Wudu during Sai</li>
                        <li>✓ You do not have to climb to the top of Safa or Marwah</li>
                        <li>✓ You can take breaks in Sai to drink water or rest</li>
                        <li>✓ Women do not have to run between the green lights</li>
                        <li>✗ There is no specific Dua to say between Safa and Marwah</li>
                        <li>✗ Do not say your intention out loud before making Sai</li>
                    </ul>
                `,
                arabic: ""
            },

            // Shaving Section
            {
                category: "Shaving",
                title: "Hair Removal for Men",
                content: `
                    <p><strong>For Men:</strong></p>
                    <ul>
                        <li><strong>Shaving the head is 3 times better</strong> than cutting the hair</li>
                        <li>If you shave, shave your <strong>complete head</strong>; do not leave parts unshaved</li>
                        <li>If you trim, <strong>take from all sides</strong> of your head, not just small pieces from each corner</li>
                        <li><strong>Do not shave your beard</strong></li>
                    </ul>
                `,
                arabic: ""
            },
            {
                category: "Shaving",
                title: "Hair Removal for Women",
                content: `
                    <p><strong>For Women:</strong></p>
                    <ul>
                        <li>Cutting a <strong>small piece from their hair is sufficient</strong></li>
                    </ul>
                `,
                arabic: ""
            },
            {
                category: "Shaving",
                title: "Completion of Umrah",
                content: `
                    <p><strong>Important reminders:</strong></p>
                    <ul>
                        <li>Do not take off your Ihram until you have shaved or trimmed</li>
                        <li>You are still in Ihram until you do so</li>
                        <li>After shaving/trimming: <strong>All Ihram rules are lifted, and your Umrah is completed!</strong></li>
                    </ul>
                    <p><em>May Allah accept your Umrah! 🤲</em></p>
                `,
                arabic: ""
            },

            // Additional Guidance
            {
                category: "Guidance",
                title: "Proper Behavior During Umrah",
                content: `
                    <p><strong>Recommended behavior:</strong></p>
                    <ul>
                        <li>Remain calm and dignified during Tawaf and Sai</li>
                        <li>Recite the dhikr of Allah and recommended duas</li>
                        <li>Avoid worldly conversation during acts of worship</li>
                        <li>Have proper presence of mind for worshipping Allah</li>
                    </ul>
                `,
                arabic: ""
            },
            {
                category: "Guidance",
                title: "Purpose of the Rituals",
                content: `
                    <p><strong>Hadith:</strong> <em>"Tawaf around the House and (Sai) between al-Safa and al-Marwah and the stoning of the Jamaar have only been prescribed so that remembrance of Allah (dhikr) will be established."</em></p>
                    <p><strong>Source:</strong> Ibn Majah (2901)</p>
                `,
                arabic: ""
            },
            {
                category: "Guidance",
                title: "Types of Mistakes in Worship",
                content: `
                    <p><strong>People who make mistakes are either:</strong></p>
                    <ol>
                        <li><strong>Completely ignorant</strong> - There is hope that there will be no blame on such people</li>
                        <li><strong>Deliberately going astray</strong> - Such a person is undoubtedly a sinner</li>
                        <li><strong>Unaware and negligent</strong> - There is fear these people may be sinning because of carelessness</li>
                    </ol>
                `,
                arabic: ""
            },
            {
                category: "Guidance",
                title: "Final Reminder",
                content: `
                    <p><strong>Key principle:</strong> Religion is not based on emotions and inclinations, but on what has been narrated from the Messenger of Allah (ﷺ).</p>
                    <p>We hope that Allah will guide our Muslim brothers and sisters to put things right so that their Umrah will be in accordance with the Sunnah of the Messenger of Allah (ﷺ).</p>
                    <p><strong>May Allah accept your Umrah and make it a means of forgiveness and blessing! Ameen.</strong></p>
                `,
                arabic: ""
            }
        ];
    }

    initializeElements() {
        // Get DOM elements
        this.cardCategoryEl = document.getElementById('cardCategory');
        this.cardNumberEl = document.getElementById('cardNumber');
        this.cardTitleEl = document.getElementById('cardTitle');
        this.cardBodyEl = document.getElementById('cardBody');
        this.arabicTextEl = document.getElementById('arabicText');
        this.currentCardEl = document.querySelector('.current-card');
        this.totalCardsEl = document.querySelector('.total-cards');
        this.progressFillEl = document.getElementById('progressFill');
        this.prevBtnEl = document.getElementById('prevBtn');
        this.nextBtnEl = document.getElementById('nextBtn');
        this.navDotsEl = document.getElementById('navDots');
        this.shuffleBtnEl = document.getElementById('shuffleBtn');
        this.resetBtnEl = document.getElementById('resetBtn');
        this.flashcardEl = document.getElementById('flashcard');

        // Update total cards
        this.totalCardsEl.textContent = this.flashcards.length;
    }

    setupEventListeners() {
        // Navigation buttons
        this.prevBtnEl.addEventListener('click', () => this.previousCard());
        this.nextBtnEl.addEventListener('click', () => this.nextCard());

        // Footer buttons
        this.shuffleBtnEl.addEventListener('click', () => this.shuffleCards());
        this.resetBtnEl.addEventListener('click', () => this.resetToBeginning());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    this.previousCard();
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                case ' ':
                    e.preventDefault();
                    this.nextCard();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToCard(0);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToCard(this.flashcards.length - 1);
                    break;
            }
        });

        // Touch/swipe support
        let startX = 0;
        let endX = 0;

        this.flashcardEl.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        this.flashcardEl.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe();
        });

        // Mouse drag support
        let mouseStartX = 0;
        let mouseEndX = 0;
        let isDragging = false;

        this.flashcardEl.addEventListener('mousedown', (e) => {
            mouseStartX = e.clientX;
            isDragging = true;
        });

        this.flashcardEl.addEventListener('mouseup', (e) => {
            if (isDragging) {
                mouseEndX = e.clientX;
                startX = mouseStartX;
                endX = mouseEndX;
                this.handleSwipe();
                isDragging = false;
            }
        });

        this.flashcardEl.addEventListener('mouseleave', () => {
            isDragging = false;
        });
    }

    handleSwipe() {
        const threshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swiped left - next card
                this.nextCard();
            } else {
                // Swiped right - previous card
                this.previousCard();
            }
        }
    }

    renderCurrentCard() {
        const card = this.flashcards[this.currentCardIndex];
        
        // Add animation
        this.flashcardEl.classList.add('card-exit');
        
        setTimeout(() => {
            // Update content
            this.cardCategoryEl.textContent = card.category;
            this.cardNumberEl.textContent = `Card ${this.currentCardIndex + 1}`;
            this.cardTitleEl.textContent = card.title;
            this.cardBodyEl.innerHTML = card.content;
            this.arabicTextEl.textContent = card.arabic;

            // Remove exit animation and add enter animation
            this.flashcardEl.classList.remove('card-exit');
            this.flashcardEl.classList.add('card-enter');
            
            setTimeout(() => {
                this.flashcardEl.classList.remove('card-enter');
            }, 300);
        }, 150);
    }

    updateProgress() {
        // Update progress indicator
        this.currentCardEl.textContent = this.currentCardIndex + 1;
        
        // Update progress bar
        const progressPercentage = ((this.currentCardIndex + 1) / this.flashcards.length) * 100;
        this.progressFillEl.style.width = `${progressPercentage}%`;

        // Update navigation buttons
        this.prevBtnEl.disabled = this.currentCardIndex === 0;
        this.nextBtnEl.disabled = this.currentCardIndex === this.flashcards.length - 1;

        // Update navigation dots
        this.updateNavigationDots();
    }

    generateNavigationDots() {
        this.navDotsEl.innerHTML = '';
        
        // Show dots for smaller number of cards, or show representative dots
        const maxDots = 15;
        const totalCards = this.flashcards.length;
        
        if (totalCards <= maxDots) {
            // Show all dots
            for (let i = 0; i < totalCards; i++) {
                const dot = document.createElement('div');
                dot.className = 'nav-dot';
                dot.addEventListener('click', () => this.goToCard(i));
                this.navDotsEl.appendChild(dot);
            }
        } else {
            // Show representative dots with current position indicator
            for (let i = 0; i < maxDots; i++) {
                const dot = document.createElement('div');
                dot.className = 'nav-dot';
                this.navDotsEl.appendChild(dot);
            }
        }
    }

    updateNavigationDots() {
        const dots = this.navDotsEl.querySelectorAll('.nav-dot');
        const totalCards = this.flashcards.length;
        
        if (totalCards <= 15) {
            // Direct mapping
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentCardIndex);
            });
        } else {
            // Proportional mapping
            dots.forEach((dot, index) => {
                const proportionalIndex = Math.floor((index / (dots.length - 1)) * (totalCards - 1));
                const isActive = Math.abs(proportionalIndex - this.currentCardIndex) <= 1;
                dot.classList.toggle('active', isActive);
            });
        }
    }

    previousCard() {
        if (this.currentCardIndex > 0) {
            this.currentCardIndex--;
            this.renderCurrentCard();
            this.updateProgress();
        }
    }

    nextCard() {
        if (this.currentCardIndex < this.flashcards.length - 1) {
            this.currentCardIndex++;
            this.renderCurrentCard();
            this.updateProgress();
        }
    }

    goToCard(index) {
        if (index >= 0 && index < this.flashcards.length) {
            this.currentCardIndex = index;
            this.renderCurrentCard();
            this.updateProgress();
        }
    }

    shuffleCards() {
        // Fisher-Yates shuffle algorithm
        const shuffled = [...this.flashcards];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        
        this.flashcards = shuffled;
        this.currentCardIndex = 0;
        this.renderCurrentCard();
        this.updateProgress();
        this.generateNavigationDots();
        
        // Show feedback
        this.showToast('Cards shuffled!');
    }

    resetToBeginning() {
        this.currentCardIndex = 0;
        this.flashcards = this.generateFlashcards(); // Reset to original order
        this.renderCurrentCard();
        this.updateProgress();
        this.generateNavigationDots();
        
        // Show feedback
        this.showToast('Reset to beginning!');
    }

    showToast(message) {
        // Create toast notification
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary-green);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            font-weight: 500;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // Animate in
        setTimeout(() => {
            toast.style.transform = 'translateX(0)';
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 2000);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new UmrahFlashcardApp();
});

// Add loading state management
window.addEventListener('load', () => {
    document.body.classList.remove('loading');
});

// Add initial loading class
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loading');
});
