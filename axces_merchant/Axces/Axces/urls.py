from django.conf.urls import patterns, include, url
from django.contrib import admin
from AxcesApp import views
urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', views.home, name='index'),
    url(r'^checkout$', views.checkout, name='checkout'),
    url(r'^demo$', views.demo, name='demo'),
    url(r'^callback$', views.callback, name='callback'),
    url(r'^dashboard$', views.dashboard, name='dashboard'),
    url(r'^login$', views.login, name='login'),
    url(r'^onboard$', views.onboard, name='onboard'),
]
