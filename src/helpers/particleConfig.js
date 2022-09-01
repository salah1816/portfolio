export default {
  background: {
    color: {
      value: "#1d1d1d"
    },
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover"
  },
  fullScreen: {
    zIndex: -1 //when I changed it from 1 to -1 I could display things over the page.
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push"
      },
      onDiv: {
        selectors: "#repulse-div",
        mode: "repulse"
      },
      onHover: {
        enable: true,
        mode: "repulse",
        parallax: {
          force: 60
        }
      }
    },
    modes: {
      slow: {
        factor: 1,
        radius: 0
      },
      attract: {
        distance: 200,
        duration: 0.4,
        easing: "ease-out-quad",
        factor: 1,
        maxSpeed: 50,
        speed: 1
      },
      bounce: {
        distance: 200
      },
      bubble: {
        distance: 400,
        duration: 2,
        mix: false,
        opacity: 0.8,
        size: 40,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: []
        }
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5
        },
        radius: 60
      },
      grab: {
        distance: 400,
        links: {
          blink: false,
          consent: false,
          opacity: 1
        }
      },
      push: {
        default: true,
        groups: [],
        quantity: 4
      },
      remove: {
        quantity: 2
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad",
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          selectors: []
        }
      },
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1
      },
      light: {
        area: {
          gradient: {
            start: {
              value: "#ffffff"
            },
            stop: {
              value: "#000000"
            }
          },
          radius: 1000
        },
        shadow: {
          color: {
            value: "#000000"
          },
          length: 2000
        }
      }
    }
  },
  particles: {
    color: {
      value: "#ffffff"
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200
        }
      },
      enable: true,
      outModes: {
        bottom: "out",
        left: "out",
        right: "out",
        top: "out"
      }
    },
    number: {
      density: {
        enable: true
      },
      value: 80
    },
    opacity: {
      value: {
        min: 0.1,
        max: 0.5
      },
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1
      }
    },
    shape: {
      options: {
        character: [
          {
            fill: true,
            font: "Font Awesome 5 Brands",
            style: "",
            value: [""],
            weight: "400"
          },
          {
            fill: true,
            font: "Font Awesome 5 Free",
            style: "",
            value: [""],
            weight: "900"
          }
        ],
        char: [
          {
            fill: true,
            font: "Font Awesome 5 Brands",
            style: "",
            value: [""],
            weight: "400"
          },
          {
            fill: true,
            font: "Font Awesome 5 Free",
            style: "",
            value: [""],
            weight: "900"
          }
        ],
        polygon: {
          sides: 5
        },
        star: {
          sides: 5
        },
        image: {
          height: 100,
          replaceColor: true,
          src: "https://particles.js.org/images/github.svg",
          width: 100
        },
        images: {
          height: 100,
          replaceColor: true,
          src: "https://particles.js.org/images/github.svg",
          width: 100
        }
      },
      type: "char"
    },
    size: {
      value: 16,
      animation: {
        speed: 10,
        minimumValue: 10
      }
    },
    stroke: {
      width: 1,
      color: {
        value: "#ffffff",
        animation: {
          h: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            decay: 0,
            sync: true
          },
          s: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            decay: 0,
            sync: true
          },
          l: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            decay: 0,
            sync: true
          }
        }
      }
    },
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        sync: false
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001
        },
        value: 0,
        sync: false
      }
    },
    roll: {
      darken: {
        enable: false,
        value: 0
      },
      enable: false,
      enlighten: {
        enable: false,
        value: 0
      },
      mode: "vertical",
      speed: 25
    },
    tilt: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        decay: 0,
        sync: false
      },
      direction: "clockwise",
      enable: false
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1
      }
    },
    wobble: {
      distance: 5,
      enable: false,
      speed: {
        angle: 50,
        move: 10
      }
    },
    orbit: {
      animation: {
        count: 0,
        enable: false,
        speed: 1,
        decay: 0,
        sync: false
      },
      enable: false,
      opacity: 1,
      rotation: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 45
      },
      width: 1
    },
    links: {
      blink: false,
      color: {
        value: "#ffffff"
      },
      consent: false,
      distance: 150,
      enable: true,
      frequency: 1,
      opacity: 0.4,
      shadow: {
        blur: 5,
        color: {
          value: "lime"
        },
        enable: false
      },
      triangles: {
        enable: false,
        frequency: 1
      },
      width: 1,
      warp: false
    },
    repulse: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1
    }
  }
};
