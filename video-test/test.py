from manim import *

BG = "#0d1117"
TURUNCU = "#e6a341"
YESIL = "#5ddc7a"
MOR = "#a077d8"
MONO = "Menlo"


class Bolum1(Scene):
    """18 yumurta dikdortgen dizilim - gercek ders sahnesi"""

    def construct(self):
        self.camera.background_color = BG

        baslik = Text("18 yumurta, 3 poşet", font_size=42, color=TURUNCU,
                      weight=BOLD, font=MONO)
        self.play(Write(baslik), run_time=1.5)
        self.wait(0.8)
        self.play(baslik.animate.scale(0.55).to_edge(UP, buff=0.5), run_time=0.8)

        # 3 sutun x 6 satir dikdortgen
        kutular = VGroup()
        for satir in range(6):
            for sutun in range(3):
                k = Circle(radius=0.17, color=TURUNCU, fill_opacity=0.85,
                           stroke_width=0)
                k.move_to(np.array([(sutun - 1) * 0.55, (2.5 - satir) * 0.5, 0]))
                kutular.add(k)

        self.play(LaggedStart(*[GrowFromCenter(k) for k in kutular],
                              lag_ratio=0.05), run_time=2.2)
        self.wait(0.6)

        cerceve = SurroundingRectangle(kutular, color=YESIL, buff=0.18,
                                       stroke_width=4, corner_radius=0.12)
        self.play(Create(cerceve), run_time=1.2)

        olcu = Text("3 × 6 = 18", font_size=32, color=YESIL, font=MONO, weight=BOLD)
        olcu.next_to(cerceve, DOWN, buff=0.35)
        self.play(FadeIn(olcu, shift=UP * 0.2), run_time=1.0)
        self.wait(1.5)

        son = Text("Tuttu. Düzgün dörtgen oldu.", font_size=26, color="#9aa4b0",
                   font=MONO)
        son.next_to(olcu, DOWN, buff=0.3)
        self.play(Write(son), run_time=1.2)
        self.wait(2.0)
        self.play(FadeOut(Group(*self.mobjects)), run_time=0.6)


class Bolum2(Scene):
    """4 posete bolununce yarim kaliyor"""

    def construct(self):
        self.camera.background_color = BG
        baslik = Text("Peki 4 poşet?", font_size=42, color=TURUNCU,
                      weight=BOLD, font=MONO)
        self.play(Write(baslik), run_time=1.2)
        self.wait(0.6)
        self.play(baslik.animate.scale(0.55).to_edge(UP, buff=0.5), run_time=0.8)

        kutular = VGroup()
        eksik = VGroup()
        say = 0
        for satir in range(5):
            for sutun in range(4):
                say += 1
                if say <= 18:
                    k = Circle(radius=0.16, color=TURUNCU, fill_opacity=0.85,
                               stroke_width=0)
                else:
                    k = DashedVMobject(Circle(radius=0.16, color="#ff8f80",
                                              stroke_width=3), num_dashes=10)
                    eksik.add(k)
                k.move_to(np.array([(sutun - 1.5) * 0.52, (2.0 - satir) * 0.5, 0]))
                kutular.add(k)

        self.play(LaggedStart(*[GrowFromCenter(k) for k in kutular],
                              lag_ratio=0.04), run_time=2.0)
        self.wait(0.5)

        cerceve = DashedVMobject(
            SurroundingRectangle(kutular, color="#ff8f80", buff=0.18,
                                 stroke_width=4), num_dashes=40)
        self.play(Create(cerceve), run_time=1.2)
        self.play(Indicate(eksik, color="#ff8f80", scale_factor=1.3), run_time=1.5)

        yazi = Text("Son sıra yarım kaldı.", font_size=28, color="#ff8f80",
                    font=MONO, weight=BOLD)
        yazi.next_to(cerceve, DOWN, buff=0.35)
        self.play(Write(yazi), run_time=1.2)
        self.wait(2.0)
        self.play(FadeOut(Group(*self.mobjects)), run_time=0.6)
