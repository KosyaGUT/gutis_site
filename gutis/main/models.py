from django.db import models

class Articles(models.Model):
    title = models.CharField("Название статьи", max_length=100)
    date = models.DateField("Введите дату публикации")
    anons = models.CharField("Первичный текст статьи", max_length=250, blank=True, null=True, default=None)
    id_news = models.CharField("Напишите id новости", max_length=8)

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = "Новость"
        verbose_name_plural = "Новости"
