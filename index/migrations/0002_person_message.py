# Generated by Django 3.2.9 on 2021-11-30 06:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='message',
            field=models.TextField(default=None, max_length=500),
            preserve_default=False,
        ),
    ]
