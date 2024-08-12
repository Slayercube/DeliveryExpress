import React from 'react';
import { useState } from 'react';

const Footer = () => {
 
  const [isOpen, setIsOpen] = useState(false);
  const [menuOne, setMenuOne] = useState(false);

  return (
    <div>
<div>
 <section>
      <nav className="font-inter mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0">
        <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
          <a href="#">
            <svg
              width="164"
              height="31"
              viewBox="0 0 164 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4496 9.10266C17.4388 9.17418 18.3496 9.2457 19.2603 9.31722C19.4644 9.33152 19.6686 9.36013 19.8413 9.43165C20.1867 9.56039 20.3595 9.81785 20.3909 10.1755C20.4223 10.6475 20.3281 11.0909 20.1396 11.52C19.9198 12.035 19.6843 12.5356 19.4173 13.0219C18.7735 14.2234 18.0669 15.3964 17.2975 16.5407C15.7744 18.7721 14.2669 20.9892 12.7909 23.2492C12.0843 24.322 11.5033 25.452 10.8438 26.5391C10.1843 27.6405 9.49343 28.7419 8.83393 29.8433C8.47278 30.4583 7.86038 30.7587 7.18518 30.9447C6.40006 31.1592 5.58354 30.7301 5.3323 30.0149C5.14388 29.4714 5.12817 28.9135 5.36371 28.3986C5.78767 27.4688 6.27445 26.5677 6.76122 25.6665C6.91824 25.3805 7.16948 25.1516 7.48353 24.98C7.9546 24.7225 8.20584 24.8083 8.33146 25.2803C8.34716 25.3233 8.34716 25.3662 8.37856 25.4806C8.48848 25.3376 8.56699 25.2517 8.6298 25.1516C9.68186 23.6068 10.6397 22.0048 11.5033 20.3598C12.8537 17.7851 14.3612 15.2962 15.8686 12.7931C16.0884 12.4212 16.3554 12.0779 16.5909 11.706C16.6537 11.6058 16.7165 11.52 16.795 11.3913C16.2454 11.3627 15.743 11.3341 15.2562 11.3055C15.1149 11.2912 15.0364 11.3627 14.9579 11.4771C14.7694 11.7489 14.581 12.0207 14.3926 12.2924C14 12.8932 13.419 13.165 12.6496 13.1077C12.4298 13.0934 12.1942 13.0934 11.9744 13.0362C11.3777 12.9075 11.0794 12.4212 11.2364 11.8776C11.2835 11.7203 11.362 11.5772 11.4405 11.4342C12.9322 9.00253 14.4083 6.58518 15.9157 4.16783C16.3554 3.46694 16.8578 2.79465 17.3289 2.09376C17.3917 1.99364 17.4545 1.90781 17.533 1.77908C17.3132 1.76478 17.1562 1.76478 16.9835 1.73617C16.5909 1.67895 16.3868 1.4787 16.3397 1.16401C16.3083 0.920847 16.4025 0.763504 16.6537 0.663377C16.8107 0.606161 16.9206 0.506034 17.0463 0.420211C17.1876 0.320084 17.3917 0.219957 17.5801 0.219957C18.3339 0.177045 19.0562 0.148438 19.7942 0.148438C20.0611 0.148438 20.3438 0.191349 20.6107 0.248565C21.1603 0.362996 21.4115 0.734896 21.2545 1.22123C21.176 1.4787 21.0504 1.73617 20.8776 1.96503C20.2653 2.73744 19.7314 3.56706 19.2603 4.4396C18.4595 5.9129 17.5959 7.34329 16.6694 8.74506C16.6066 8.84519 16.5438 8.94532 16.4496 9.10266Z"
                fill="black"
              />
              <path
                d="M14.7566 14.4257C14.4374 14.8238 14.1562 15.2617 13.9123 15.6912C12.6406 17.8937 11.3835 20.0837 10.1419 22.3029C9.36942 23.6673 8.60612 25.0458 7.84532 26.4199C7.33828 27.3356 6.83235 28.2493 6.32555 29.1556L6.32554 29.1556L6.32363 29.159C6.23907 29.3131 6.16069 29.4283 6.06408 29.5163L6.06401 29.5162L6.05663 29.5232C5.95851 29.6163 5.86353 29.6448 5.77879 29.6435C5.68884 29.642 5.57357 29.6055 5.45241 29.5047C5.25707 29.3358 5.18132 29.1724 5.17301 28.9906L5.17319 28.9906L5.1722 28.9769C5.16454 28.8723 5.1566 28.7686 5.14871 28.6655C5.10686 28.1191 5.06659 27.5931 5.07918 27.0657L5.07922 27.0638C5.10271 25.8938 5.13796 24.7234 5.1733 23.5501L5.17334 23.5489C5.20864 22.3768 5.24404 21.2018 5.26764 20.0263L5.26765 20.0262C5.28865 18.9645 5.29567 17.9001 5.30266 16.8396C5.30596 16.3404 5.30924 15.8422 5.31398 15.3454C5.33406 15.2661 5.33485 15.1948 5.33134 15.1438C5.32665 15.0754 5.30981 15.0027 5.30452 14.9799C5.30393 14.9774 5.30349 14.9755 5.30322 14.9742L5.21149 14.5564L4.78454 14.5824C4.73166 14.5856 4.67933 14.5888 4.62745 14.5919C4.21389 14.6172 3.82956 14.6408 3.43305 14.6532L3.42574 14.6534L3.41844 14.6539C2.71158 14.6968 1.99393 14.7394 1.293 14.7678L1.28041 14.7683L1.26786 14.7695C1.14126 14.781 1.03049 14.781 0.903944 14.7695C0.707958 14.7511 0.604499 14.6773 0.557012 14.6173C0.513971 14.563 0.482223 14.4777 0.510843 14.3445L0.513053 14.3365L0.515043 14.3296L0.526831 14.3135L0.549654 14.259C1.26959 12.5392 1.77899 10.7821 2.25091 9.03396C2.78385 7.10636 3.33259 5.17827 3.88171 3.26318C3.93491 3.08327 3.99211 2.90256 4.05104 2.7165L4.05175 2.71424C4.10972 2.53117 4.16936 2.34284 4.22532 2.15369C4.28502 1.96499 4.36184 1.84777 4.44638 1.77338C4.52727 1.70221 4.65028 1.63911 4.86151 1.61868C5.14011 1.59328 5.41591 1.55966 5.68256 1.52715C5.72503 1.52198 5.76726 1.51683 5.80924 1.51175C6.11767 1.4744 6.41554 1.44017 6.71441 1.41966C9.55309 1.26154 12.389 0.974398 15.1987 0.674124C15.8974 0.603433 16.6121 0.546804 17.3119 0.504299C17.5268 0.492132 17.7265 0.50549 17.9025 0.548245L17.9025 0.548407L17.9151 0.551129C18.091 0.589087 18.1662 0.670076 18.1953 0.725916C18.2234 0.779914 18.2386 0.867109 18.1828 0.988849C18.1296 1.0937 18.0517 1.19768 17.9381 1.34545L17.9319 1.35351L17.9261 1.36181C17.8493 1.47063 17.7713 1.58007 17.6928 1.69016C17.4892 1.97576 17.2825 2.26566 17.0863 2.56002L17.0863 2.56L17.0826 2.5656C16.8796 2.87926 16.6784 3.19188 16.4779 3.50349C15.9616 4.30586 15.4495 5.10163 14.9201 5.8918C14.1841 6.99016 13.4322 8.08888 12.6787 9.18995C12.463 9.4987 12.2468 9.7941 12.027 10.0945C11.9724 10.1691 11.9157 10.2561 11.8546 10.3497C11.8346 10.3804 11.8141 10.4118 11.7931 10.4437L11.2826 11.2188H12.2107H12.2116H12.2125H12.2134H12.2143H12.2152H12.2162H12.2171H12.218H12.2189H12.2198H12.2207H12.2216H12.2225H12.2234H12.2243H12.2252H12.2261H12.227H12.2279H12.2288H12.2297H12.2306H12.2315H12.2323H12.2332H12.2341H12.235H12.2359H12.2368H12.2376H12.2385H12.2394H12.2403H12.2411H12.242H12.2429H12.2437H12.2446H12.2455H12.2463H12.2472H12.2481H12.2489H12.2498H12.2507H12.2515H12.2524H12.2532H12.2541H12.2549H12.2558H12.2566H12.2575H12.2583H12.2592H12.26H12.2609H12.2617H12.2625H12.2634H12.2642H12.2651H12.2659H12.2667H12.2676H12.2684H12.2692H12.2701H12.2709H12.2717H12.2725H12.2734H12.2742H12.275H12.2758H12.2766H12.2775H12.2783H12.2791H12.2799H12.2807H12.2815H12.2823H12.2832H12.284H12.2848H12.2856H12.2864H12.2872H12.288H12.2888H12.2896H12.2904H12.2912H12.292H12.2928H12.2936H12.2944H12.2952H12.296H12.2967H12.2975H12.2983H12.2991H12.2999H12.3007H12.3015H12.3022H12.303H12.3038H12.3046H12.3054H12.3061H12.3069H12.3077H12.3085H12.3092H12.31H12.3108H12.3115H12.3123H12.3131H12.3138H12.3146H12.3154H12.3161H12.3169H12.3176H12.3184H12.3192H12.3199H12.3207H12.3214H12.3222H12.3229H12.3237H12.3244H12.3252H12.3259H12.3267H12.3274H12.3282H12.3289H12.3296H12.3304H12.3311H12.3319H12.3326H12.3333H12.3341H12.3348H12.3356H12.3363H12.337H12.3377H12.3385H12.3392H12.3399H12.3407H12.3414H12.3421H12.3428H12.3436H12.3443H12.345H12.3457H12.3464H12.3472H12.3479H12.3486H12.3493H12.35H12.3507H12.3515H12.3522H12.3529H12.3536H12.3543H12.355H12.3557H12.3564H12.3571H12.3578H12.3585H12.3592H12.3599H12.3606H12.3613H12.362H12.3627H12.3634H12.3641H12.3648H12.3655H12.3662H12.3669H12.3676H12.3683H12.369H12.3697H12.3704H12.371H12.3717H12.3724H12.3731H12.3738H12.3745H12.3752H12.3758H12.3765H12.3772H12.3779H12.3785H12.3792H12.3799H12.3806H12.3813H12.3819H12.3826H12.3833H12.3839H12.3846H12.3853H12.386H12.3866H12.3873H12.388H12.3886H12.3893H12.3899H12.3906H12.3913H12.3919H12.3926H12.3933H12.3939H12.3946H12.3952H12.3959H12.3965H12.3972H12.3979H12.3985H12.3992H12.3998H12.4005H12.4011H12.4018H12.4024H12.4031H12.4037H12.4044H12.405H12.4057H12.4063H12.4069H12.4076H12.4082H12.4089H12.4095H12.4102H12.4108H12.4114H12.4121H12.4127H12.4134H12.414H12.4146H12.4153H12.4159H12.4165H12.4172H12.4178H12.4184H12.4191H12.4197H12.4203H12.4209H12.4216H12.4222H12.4228H12.4235H12.4241H12.4247H12.4253H12.426H12.4266H12.4272H12.4278H12.4284H12.4291H12.4297H12.4303H12.4309H12.4315H12.4322H12.4328H12.4334H12.434H12.4346H12.4352H12.4359H12.4365H12.4371H12.4377H12.4383H12.4389H12.4395H12.4401H12.4407H12.4414H12.442H12.4426H12.4432H12.4438H12.4444H12.445H12.4456H12.4462H12.4468H12.4474H12.448H12.4486H12.4492H12.4498H12.4504H12.451H12.4516H12.4522H12.4528H12.4534H12.454H12.4546H12.4552H12.4558H12.4564H12.457H12.4576H12.4582H12.4588H12.4594H12.46H12.4606H12.4612H12.4617H12.4623H12.4629H12.4635H12.4641H12.4647H12.4653H12.4659H12.4665H12.4671H12.4676H12.4682H12.4688H12.4694H12.47H12.4706H12.4711H12.4717H12.4723H12.4729H12.4735H12.4741H12.4746H12.4752H12.4758H12.4764H12.477H12.4775H12.4781H12.4787H12.4793H12.4799H12.4804H12.481H12.4816H12.4822H12.4827H12.4833H12.4839H12.4845H12.4851H12.4856H12.4862H12.4868H12.4873H12.4879H12.4885H12.4891H12.4896H12.4902H12.4908H12.4914H12.4919H12.4925H12.4931H12.4936H12.4942H12.4948H12.4953H12.4959H12.4965H12.497H12.4976H12.4982H12.4987H12.4993H12.4999H12.5004H12.501H12.5016H12.5021H12.5027H12.5033H12.5038H12.5044H12.505H12.5055H12.5061H12.5067H12.5072H12.5078H12.5083H12.5089H12.5095H12.51H12.5106H12.5112H12.5117H12.5123H12.5128H12.5134H12.514H12.5145H12.5151H12.5156H12.5162H12.5168H12.5173H12.5179H12.5184H12.519H12.5195H12.5201H12.5207H12.5212H12.5218H12.5223H12.5229H12.5235H12.524H12.5246H12.5251H12.5257H12.5262H12.5268H12.5273H12.5279H12.5285H12.529H12.5296H12.5301H12.5307H12.5312H12.5318H12.5323H12.5329H12.5335H12.534H12.5346H12.5351H12.5357H12.5362H12.5368H12.5373H12.5379H12.5384H12.539H12.5395H12.5401H12.5407H12.5412H12.5418H12.5423H12.5429H12.5434H12.544H12.5445H12.5451H12.5456H12.5462H12.5467H12.5473H12.5478H12.5484H12.5489H12.5495H12.55H12.5506H12.5511H12.5517H12.5523H12.5528H12.5534H12.5534C13.2057 11.2259 13.8578 11.2295 14.5082 11.2331H14.5083C15.1602 11.2366 15.8105 11.2402 16.4605 11.2473V11.2474H16.466C16.5172 11.2474 16.5909 11.2556 16.6788 11.2687C16.8542 11.3044 16.942 11.3854 16.9788 11.4471C17.013 11.5043 17.0312 11.589 16.9797 11.7097L16.9789 11.7115C16.936 11.8133 16.8464 11.931 16.7064 12.0868L16.7002 12.0937L16.6943 12.1008C16.4846 12.3524 16.2707 12.6054 16.0555 12.8599C15.6202 13.3748 15.1795 13.8961 14.7566 14.4257ZM14.7566 14.4257C14.7568 14.4256 14.7569 14.4254 14.757 14.4253L15.147 14.7381L14.7563 14.4262C14.7564 14.426 14.7565 14.4259 14.7566 14.4257Z"
                fill="white"
                stroke="black"
              />
              <path
                d="M27.3169 5.49726V21.195H30.7255V14.8935H40.2115V11.8212H30.7255V8.59196H40.6824V5.49726H27.3169Z"
                fill="black"
              />
              <path
                d="M45.3321 21.195V5.07118H41.9459V21.195H45.3321Z"
                fill="black"
              />
              <path
                d="M53.3883 8.39013C49.576 8.39013 46.3916 10.4757 46.3916 14.8038C46.3916 19.1543 49.576 21.195 53.3883 21.195C57.223 21.195 60.4074 19.2216 60.4074 14.8038C60.4074 10.4308 57.223 8.39013 53.3883 8.39013ZM53.3883 18.1003C51.2579 18.1003 49.7329 17.1584 49.7329 14.8038C49.7329 12.4267 51.2579 11.5073 53.3883 11.5073C55.5411 11.5073 57.066 12.4715 57.066 14.8038C57.066 17.0687 55.5411 18.1003 53.3883 18.1003Z"
                fill="black"
              />
              <path
                d="M78.1371 8.61438L75.2218 17.876L72.3513 8.61438H69.0324L66.1844 17.876L63.2691 8.61438H59.838L63.7849 21.195H68.4045L70.6918 13.7498L73.0017 21.195H77.6213L81.5681 8.61438H78.1371Z"
                fill="black"
              />
              <path
                d="M88.0263 13.5704L87.7347 13.548C85.5371 13.2116 85.1558 12.8976 85.1558 12.337C85.1558 11.9558 85.5595 11.2606 87.4656 11.2606C89.4391 11.2606 90.2912 11.7988 90.2912 12.7855V12.8976H93.7672V12.7855C93.7672 10.8569 92.6683 8.54711 87.4656 8.54711C82.6218 8.54711 81.6126 10.6327 81.6126 12.3818C81.6126 14.8935 83.8552 15.7008 87.4656 16.1717C87.645 16.1941 87.8244 16.2166 88.0038 16.239C89.3718 16.396 90.5828 16.5754 90.5828 17.5172C90.5828 18.347 89.2821 18.5264 87.9141 18.5264C85.6492 18.5264 84.8419 18.033 84.8419 16.9566V16.8445H81.3435V17.0912C81.3211 17.7415 81.3211 18.7955 82.1957 19.6701C83.2048 20.6792 85.1558 21.195 88.0038 21.195C91.861 21.195 94.1035 20.5895 94.1035 17.4724C94.1035 14.4898 90.8743 13.9965 88.0263 13.5704Z"
                fill="black"
              />
              <path
                d="M103.523 8.63681C101.191 8.63681 99.7558 9.37684 98.9036 10.4757H98.7242V8.63681H95.3156V25.994H98.7242V19.4682H98.8812C99.7333 20.5671 101.169 21.2398 103.523 21.2398C108.816 21.2398 109.399 16.6202 109.399 14.9383C109.399 13.0994 108.838 8.63681 103.523 8.63681ZM102.537 18.3021C99.5764 18.3021 98.9709 16.8445 98.9709 14.9383C98.9709 13.234 99.5764 11.5745 102.537 11.5745C105.788 11.5745 106.147 13.9516 106.147 14.9383C106.147 15.8353 105.788 18.3021 102.537 18.3021Z"
                fill="black"
              />
              <path
                d="M120.504 10.4757C119.652 9.35442 118.239 8.61438 115.907 8.61438C110.592 8.61438 110.032 13.077 110.032 14.9159C110.032 16.5978 110.615 21.195 115.885 21.195C118.262 21.195 119.697 20.5447 120.549 19.4458H120.661V21.195H124.07V8.61438H120.661V10.4757H120.504ZM116.894 18.2797C113.642 18.2797 113.283 15.8129 113.283 14.9159C113.283 13.9292 113.62 11.5521 116.894 11.5521C119.832 11.5521 120.437 13.2116 120.437 14.9159C120.437 16.8221 119.832 18.2797 116.894 18.2797Z"
                fill="black"
              />
              <path
                d="M132.584 8.61438C130.409 8.61438 129.646 9.26472 128.929 10.4757H128.727V8.61438H125.318V21.195H128.727V15.5662C128.727 13.8619 129.467 11.8885 132.001 11.8885C133.077 11.8885 133.952 12.0679 134.266 12.1576L134.804 8.95076C134.221 8.81621 133.481 8.61438 132.584 8.61438Z"
                fill="black"
              />
              <path
                d="M149.18 8.61438H144.449L138.91 14.0862V5.00391H135.523V21.1726H138.91V18.7282L141.354 16.3063L144.897 21.195H149.136L143.843 13.8843L149.18 8.61438Z"
                fill="black"
              />
            </svg>
          </a>
          <div
            className={`mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0 ${isOpen ? "" : "hidden"}`}
          >
            <div className="relative flex flex-col">
              <button
                onClick={() => setMenuOne(!menuOne)}
                className={`flex flex-row rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800 ${menuOne ? "text-gray-800 lg:border lg:border-gray-600 lg:bg-gray-50" : "text-black lg:border lg:border-white"}`}
              >
                Component
                <svg
                  className={`w-6 h-6 fill-current transition-transform duration-300 ${menuOne ? "rotate-180" : "rotate-0"}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
                </svg>
              </button>
              {menuOne && (
                <div className="z-50 flex w-full flex-col rounded-lg px-5 py-5 lg:absolute lg:top-20 lg:w-[800px] bg-gray-100 lg:flex-row lg:flex-wrap lg:py-7 xl:w-[950px]">
                  {/* ITEM */}
                  <a
                    className="flex grow flex-col rounded-lg px-5 py-5  lg:basis-60 xl:px-8"
                    href="#"
                  >
                    {/* ICON */}
                    <div className="relative">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" fill="#C4C4C4" />
                        <path
                          d="M18.4688 18.6875C18.8312 18.6875 19.125 18.3937 19.125 18.0312C19.125 17.6688 18.8312 17.375 18.4688 17.375C18.1063 17.375 17.8125 17.6688 17.8125 18.0312C17.8125 18.3937 18.1063 18.6875 18.4688 18.6875Z"
                          fill="black"
                        />
                        <path
                          d="M24.3751 14.75H15.6251C15.3931 14.7503 15.1707 14.8425 15.0066 15.0066C14.8426 15.1706 14.7503 15.393 14.7501 15.625V22.6236L14.75 22.6253L14.7501 24.375C14.7503 24.607 14.8426 24.8294 15.0066 24.9934C15.1707 25.1575 15.3931 25.2497 15.6251 25.25H24.3751C24.607 25.2497 24.8294 25.1575 24.9935 24.9934C25.1575 24.8294 25.2498 24.607 25.2501 24.375V15.625C25.2498 15.393 25.1575 15.1706 24.9935 15.0066C24.8294 14.8425 24.607 14.7503 24.3751 14.75ZM22.8063 19.125C22.642 18.9612 22.4195 18.8691 22.1875 18.8691C21.9555 18.8691 21.733 18.9612 21.5688 19.125L19.1251 21.5688L17.9938 20.4375C17.8295 20.2737 17.607 20.1817 17.375 20.1817C17.1431 20.1817 16.9205 20.2737 16.7563 20.4375L15.6251 21.5687V15.625H24.3751L24.3754 20.6941L22.8063 19.125Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    {/* TEXT */}
                    <h2 className="font-inter mb-1 mt-5 text-lg font-medium text-black">
                      Analytics
                    </h2>
                    <p className="font-inter max-w-64 text-sm text-gray-500 lg:max-w-sm">
                      Get a better understanding of where your traffic is coming
                      from
                    </p>
                  </a>
                  {/* ITEM */}
                  <a
                    className="flex grow flex-col rounded-lg px-5 py-5  lg:basis-60 xl:px-8"
                    href="#"
                  >
                    {/* ICON */}
                    <div className="relative">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" fill="#C4C4C4" />
                        <path
                          d="M18.4688 18.6875C18.8312 18.6875 19.125 18.3937 19.125 18.0312C19.125 17.6688 18.8312 17.375 18.4688 17.375C18.1063 17.375 17.8125 17.6688 17.8125 18.0312C17.8125 18.3937 18.1063 18.6875 18.4688 18.6875Z"
                          fill="black"
                        />
                        <path
                          d="M24.3751 14.75H15.6251C15.3931 14.7503 15.1707 14.8425 15.0066 15.0066C14.8426 15.1706 14.7503 15.393 14.7501 15.625V22.6236L14.75 22.6253L14.7501 24.375C14.7503 24.607 14.8426 24.8294 15.0066 24.9934C15.1707 25.1575 15.3931 25.2497 15.6251 25.25H24.3751C24.607 25.2497 24.8294 25.1575 24.9935 24.9934C25.1575 24.8294 25.2498 24.607 25.2501 24.375V15.625C25.2498 15.393 25.1575 15.1706 24.9935 15.0066C24.8294 14.8425 24.607 14.7503 24.3751 14.75ZM22.8063 19.125C22.642 18.9612 22.4195 18.8691 22.1875 18.8691C21.9555 18.8691 21.733 18.9612 21.5688 19.125L19.1251 21.5688L17.9938 20.4375C17.8295 20.2737 17.607 20.1817 17.375 20.1817C17.1431 20.1817 16.9205 20.2737 16.7563 20.4375L15.6251 21.5687V15.625H24.3751L24.3754 20.6941L22.8063 19.125Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    {/* TEXT */}
                    <h2 className="font-inter mb-1 mt-5 text-lg font-medium text-black">
                      Engagement
                    </h2>
                    <p className="font-inter max-w-64 text-sm text-gray-500 lg:max-w-sm">
                      Speak directly to your customers in a more meaningful way
                    </p>
                  </a>
                  {/* ITEM */}
                  <a
                    className="flex grow flex-col rounded-lg px-5 py-5  lg:basis-60 xl:px-8"
                    href="#"
                  >
                    {/* ICON */}
                    <div className="relative">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" fill="#C4C4C4" />
                        <path
                          d="M18.4688 18.6875C18.8312 18.6875 19.125 18.3937 19.125 18.0312C19.125 17.6688 18.8312 17.375 18.4688 17.375C18.1063 17.375 17.8125 17.6688 17.8125 18.0312C17.8125 18.3937 18.1063 18.6875 18.4688 18.6875Z"
                          fill="black"
                        />
                        <path
                          d="M24.3751 14.75H15.6251C15.3931 14.7503 15.1707 14.8425 15.0066 15.0066C14.8426 15.1706 14.7503 15.393 14.7501 15.625V22.6236L14.75 22.6253L14.7501 24.375C14.7503 24.607 14.8426 24.8294 15.0066 24.9934C15.1707 25.1575 15.3931 25.2497 15.6251 25.25H24.3751C24.607 25.2497 24.8294 25.1575 24.9935 24.9934C25.1575 24.8294 25.2498 24.607 25.2501 24.375V15.625C25.2498 15.393 25.1575 15.1706 24.9935 15.0066C24.8294 14.8425 24.607 14.7503 24.3751 14.75ZM22.8063 19.125C22.642 18.9612 22.4195 18.8691 22.1875 18.8691C21.9555 18.8691 21.733 18.9612 21.5688 19.125L19.1251 21.5688L17.9938 20.4375C17.8295 20.2737 17.607 20.1817 17.375 20.1817C17.1431 20.1817 16.9205 20.2737 16.7563 20.4375L15.6251 21.5687V15.625H24.3751L24.3754 20.6941L22.8063 19.125Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    {/* TEXT */}
                    <h2 className="font-inter mb-1 mt-5 text-lg font-medium text-black">
                      Automations
                    </h2>
                    <p className="font-inter max-w-64 text-sm text-gray-500 lg:max-w-sm">
                      Build strategic funnels that will drive your customers to
                      convert
                    </p>
                  </a>
                </div>
              )}
            </div>
            <a
              href="#"
              className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800"
            >
              Templates
            </a>
            <a
              href="#"
              className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800"
            >
              Pricing
            </a>
            <a
              href="#"
              className="font-inter lg: rounded-lg pb-8 lg:px-6 lg:py-4 lg: lg:hover:text-gray-800"
            >
              FAQs
            </a>
          </div>
          <div
            className={`flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0 ${isOpen ? "" : "hidden"}`}
          >
            <a
              href="#"
              className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800"
            >
              Sign Up
            </a>
            <a
              className="font-inter rounded-lg bg-black px-8 py-4 text-center text-white hover:bg-gray-800"
              href="#"
            >
              Login
            </a>
          </div>
          <button
            className="absolute right-5 lg:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 12H20.25"
                stroke="#160042"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3.75 6H20.25"
                stroke="#160042"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3.75 18H20.25"
                stroke="#160042"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </section>  
</div>

   

   <div>
   <header>
      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
          {/* Hero Content */}
          <div className="flex flex-col">
            {/* Hero Title */}
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              The Website You Want Without The Dev Time.
            </h1>
            <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
            {/* Hero Button */}
            <div className="flex items-center">
              <a
                href="#"
                className="mr-5 items-center rounded-md bg-primary px-6 py-3 font-semibold text-white md:mr-6 lg:mr-8"
              >
                Send now
              </a>
              <a href="#" className="flex max-w-full items-center font-bold">
                <img
                  src="https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/119056/optimized_product_thumb_m11986-r-el2.jpg"
                  alt=""
                  className="mr-2 inline-block max-h-4 w-5"
                />
                <p>View Showreel</p>
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/delivery-boy-deliver-packages-using-scooters-7243118-5902343.png?f=webp"
            alt=""
            className="inline-block h-full w-full max-w-2xl"
          />
        </div>
      </div>
    </header>
   </div>

<div>
<section>
      {/*Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="flex flex-col items-center gap-8 sm:grid sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-6">
          <div className="flex justify-center">
            <img
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b03aedf8d5a0_Microsoft%20Logo.svg"
              alt=""
              className="inline-block"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0620ef8d5a5_PayPal%20Logo.svg"
              alt=""
              className="inline-block"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b00612f8d5a4_Google%20Logo.svg"
              alt=""
              className="inline-block"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0582cf8d599_Chase%20Logo.svg"
              alt=""
              className="inline-block"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0484ef8d59a_Walmart%20Logo.svg"
              alt=""
              className="inline-block"
            />
          </div>
        </div>
      </div>
    </section>
</div>

   <div>

   <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          Our Team Members
        </h2>
        <p className="mx-auto mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          Lorem ipsum dolor sit amet elit ut aliquam
        </p>
        {/* Content */}
        <div className="mx-auto grid max-w-5xl justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {/* Item */}
          <div className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full md:items-start">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className=" mb-4 inline-block h-56 w-full object-cover lg:h-72"
            />
            <p className="font-bold">John</p>
            <p className="text-sm text-gray-500">Webflow Developer</p>
          </div>
          {/* Item */}
          <div className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full md:items-start">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className=" mb-4 inline-block h-56 w-full object-cover lg:h-72"
            />
            <p className="font-bold">Annisyah</p>
            <p className="text-sm text-gray-500">Webflow Developer</p>
          </div>
          {/* Item */}
          <div className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full md:items-start">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className=" mb-4 inline-block h-56 w-full object-cover lg:h-72"
            />
            <p className="font-bold">Tamara</p>
            <p className="text-sm text-gray-500">Webflow Developer</p>
          </div>
        </div>
      </div>
    </section>
   </div>

   <div>
   <section className="block">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Heading */}
        <h2 className="mx-auto mb-8 max-w-3xl text-center text-3xl font-bold md:mb-12 md:text-5xl lg:mb-16">
          What our clients are saying
        </h2>
        {/* Contents */}
        <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mb-8">
          {/* Content 1 */}
          <div className="grid grid-cols-1 gap-6 rounded-md border border-solid border-gray-300 bg-white p-8 md:p-10">
            <div className="flex">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
            </div>
            <div className="text-gray-500">
              “Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"
            </div>
            <div className="flex flex-row items-start">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
              />
              <div className="flex flex-col items-start">
                <h6 className="text-base font-bold">Laila Bahar</h6>
                <p className="text-sm text-gray-500">Designer</p>
              </div>
            </div>
          </div>
          {/* Content 2 */}
          <div className="grid grid-cols-1 gap-6 rounded-md border border-solid border-gray-300 bg-white p-8 md:p-10">
            <div className="flex">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
            </div>
            <div className="text-gray-500">
              “Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"
            </div>
            <div className="flex flex-row items-start">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
              />
              <div className="flex flex-col items-start">
                <h6 className="text-base font-bold">Laila Bahar</h6>
                <p className="text-sm text-gray-500">Designer</p>
              </div>
            </div>
          </div>
          {/* Content 3 */}
          <div className="grid grid-cols-1 gap-6 rounded-md border border-solid border-gray-300 bg-white p-8 md:p-10">
            <div className="flex">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                alt=""
                className="mr-1 inline-block w-3.5 flex-none"
              />
            </div>
            <div className="text-gray-500">
              “Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"
            </div>
            <div className="flex flex-row items-start">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
                className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
              />
              <div className="flex flex-col items-start">
                <h6 className="text-base font-bold">Laila Bahar</h6>
                <p className="text-sm text-gray-500">Designer</p>
              </div>
            </div>
          </div>
        </div>
        {/* Text Button */}
        <div className="flex flex-col">
          <a href="#" className="mx-auto font-bold text-black">
            Check all reviews
          </a>
        </div>
      </div>
    </section>
   </div>

    </div>
  );
 
};

export default Footer;