from django import forms

class MainForm(forms.Form):
    partner_csv = forms.FileField(label='File with Partner Account Signups')